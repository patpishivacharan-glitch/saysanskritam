import React, {useState} from 'react'

export default function Inquiry(){
  const [form, setForm] = useState({name:'',email:'',question:''})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok || !data.ok){
        throw new Error(data.error || 'Failed to send inquiry')
      }
      setSent(true)
    } catch (err){
      setError(err.message)
    } finally {
      setSending(false)
    }
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
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" disabled={sending} />
            </label>
            <label>Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your.email@example.com" disabled={sending} />
            </label>
            <label>Question / Message
              <textarea name="question" value={form.question} onChange={handleChange} rows={5} required placeholder="Tell me what you'd like to learn or ask any questions..." disabled={sending} />
            </label>
            {error && <p style={{color:'#C1121F', fontSize:'0.9rem'}}>{error}</p>}
            <div style={{marginTop:16}}>
              <button type="submit" disabled={sending}>{sending ? 'Sending…' : '🚀 Submit Inquiry'}</button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}
