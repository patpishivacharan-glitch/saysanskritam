import React, {useState} from 'react'

export default function Inquiry(){
  const [form, setForm] = useState({name:'',email:'',question:''})
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('Session inquiry', form)
    setSent(true)
  }

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)'}}>
        <h2>📝 Book a Session / Ask Questions</h2>
        <p>Ready to begin your Sanskrit journey? Book a session or ask any questions you have!</p>
      </section>

      <section className="card">
        {sent ? (
          <div style={{padding: '40px', background: '#E8F5E9', borderRadius: '12px', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '16px'}}>✅</div>
            <h3 style={{color: '#4CAF50', marginBottom: '12px'}}>Thank You!</h3>
            <p style={{fontSize: '1.1rem'}}>We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your.email@example.com" />
            </label>
            <label>Question / Message
              <textarea name="question" value={form.question} onChange={handleChange} rows={5} required placeholder="Tell me what you'd like to learn or ask any questions..." />
            </label>
            <div style={{marginTop:16}}>
              <button type="submit">🚀 Submit Inquiry</button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}
