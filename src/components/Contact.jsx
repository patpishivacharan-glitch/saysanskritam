import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    // placeholder: in real site you'd POST to backend or a service
    console.log('Inquiry', form)
    setSent(true)
  }

  // Build a WhatsApp deep link with a prefilled message using form fields if present.
  const whatsappNumber = '918513813487' // Use international format without + or spaces
  const baseWaUrl = `https://wa.me/${whatsappNumber}`
  const waMessage = form.name || form.email || form.message ?
    `Hello, my name is ${form.name || '(name)'}. My email is ${form.email || '(email)'}. I would like to inquire: ${form.message || '(your message here)'}` :
    'Hello! I would like to know more about your Sanskrit courses.'
  const waLink = `${baseWaUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'}}>
        <h2>📞 Get In Touch</h2>
        <p style={{fontSize: '1.1rem'}}>Have questions? Want to start your Sanskrit journey? Reach out to me!</p>
      </section>

      <div className="grid">
        <section className="card">
          <h3>📧 Email</h3>
          <p><a href="mailto:saysanskritam@gmail.com ">saysanskritam@gmail.com</a></p>
        </section>
        <section className="card">
          <h3>📱 Phone</h3>
          <p>+91-8513813487</p>
        </section>
      </div>

      <section className="card">
        <h3>🌐 Social Media</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '10px 20px', background: '#25D366', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}
            title="Chat on WhatsApp"
          >💬 WhatsApp</a>
          <a href="#" style={{padding: '10px 20px', background: '#E4405F', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>📸 Instagram</a>
          <a href="#" style={{padding: '10px 20px', background: '#1877F2', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>👍 Facebook</a>
        </div>
        <p style={{marginTop:'12px', fontSize:'0.85rem', color:'#555'}}>
          Tip: Fill in your name/email/message below first and then click WhatsApp to send a prefilled inquiry.
        </p>
      </section>

      <section className="card">
        <h3>✉️ Send a Message</h3>
        {sent ? (
          <div style={{padding: '20px', background: '#E8F5E9', borderRadius: '8px', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', color: '#4CAF50', margin: 0}}>✅ Thanks! Your message has been received. I'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your.email@example.com" />
            </label>
            <label>Message
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required placeholder="Tell me about your interest in Sanskrit..." />
            </label>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginTop:16}}>
              <button type="submit">📤 Send Message</button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{background:'#25D366', color:'#fff', padding:'12px 20px', borderRadius:'8px', fontWeight:'600', textDecoration:'none'}}
              >💬 WhatsApp Direct</a>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}
