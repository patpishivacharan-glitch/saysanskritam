import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

// Email transporter setup using environment variables
// Required ENV: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, INQUIRY_TO_EMAIL
let transporter
try {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
} catch (e) {
  console.error('Failed to create transporter:', e)
}

app.post('/api/inquiry', async (req, res) => {
  const { name, email, question } = req.body || {}
  if (!name || !email || !question) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' })
  }
  if (!transporter) {
    return res.status(500).json({ ok: false, error: 'Email transporter not configured.' })
  }
  const toAddress = process.env.INQUIRY_TO_EMAIL || process.env.SMTP_USER
  const mailOptions = {
    from: `SaySanskritam Inquiry <${process.env.SMTP_USER}>`,
    to: toAddress,
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nQuestion:\n${question}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Question:</strong><br/>${question.replace(/\n/g,'<br/>')}</p>`
  }
  try {
    await transporter.sendMail(mailOptions)
    res.json({ ok: true })
  } catch (err) {
    console.error('Mail send failed', err)
    res.status(500).json({ ok: false, error: 'Failed to send email.' })
  }
})

// Serve built frontend if exists
const distPath = path.join(__dirname, 'dist')
app.use(express.static(distPath))
// SPA fallback
app.get('*', (req, res) => {
  const indexFile = path.join(distPath, 'index.html')
  res.sendFile(indexFile)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
