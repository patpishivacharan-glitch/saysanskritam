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

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'}}>
        <h2>📞 Get In Touch</h2>
        <p style={{fontSize: '1.1rem'}}>Have questions? Want to start your Sanskrit journey? Reach out to me!</p>
      </section>

      <div className="grid">
        <section className="card">
          <h3>📧 Email</h3>
          <p><a href="mailto:info@saysanskritam.com">info@saysanskritam.com</a></p>
        </section>
        <section className="card">
          <h3>📱 Phone</h3>
          <p>+91-XXXXXXXXXX</p>
        </section>
      </div>

      <section className="card">
        <h3>🌐 Social Media</h3>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <a href="#" style={{padding: '10px 20px', background: '#25D366', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>💬 WhatsApp</a>
          <a href="#" style={{padding: '10px 20px', background: '#E4405F', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>📸 Instagram</a>
          <a href="#" style={{padding: '10px 20px', background: '#1877F2', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>👍 Facebook</a>
        </div>
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
            <div style={{marginTop:16}}>
              <button type="submit">📤 Send Message</button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}
