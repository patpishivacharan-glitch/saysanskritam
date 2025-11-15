import React from 'react'

export default function FAQ(){
  const faqs = [
    {q: 'Is learning Sanskrit online effective?', a: 'Yes! With structured lessons, interactive sessions, and personalized attention, online learning is both convenient and highly effective.', icon: '💻'},
    {q: 'Do I need prior knowledge?', a: 'Not at all! Our beginner courses start from scratch and guide you step-by-step through the fundamentals.', icon: '🌱'},
    {q: 'What materials do I need?', a: 'We provide all PDFs and resources. A notebook, willingness to learn, and regular practice are all you need!', icon: '📚'},
    {q: 'How long does it take to learn Sanskrit?', a: 'Basic proficiency can be achieved in 8-12 weeks with consistent practice. Advanced mastery takes longer but we support you every step.', icon: '⏰'},
    {q: 'Can I get a certificate?', a: 'Yes! We provide certificates of completion for all our courses.', icon: '🎓'},
    {q: 'What are the class timings?', a: 'We offer flexible timings to accommodate students across different time zones. Private lessons can be scheduled at your convenience.', icon: '🕰️'}
  ]

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)'}}>
        <h2>❓ Frequently Asked Questions</h2>
        <p>Find answers to common questions about learning Sanskrit online.</p>
      </section>

      {faqs.map((faq, i) => (
        <section key={i} className="card">
          <h3 style={{color: '#FF6B35', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <span style={{fontSize: '1.5rem'}}>{faq.icon}</span>
            {faq.q}
          </h3>
          <p style={{fontSize: '1.05rem', marginLeft: '40px', color: '#555'}}>{faq.a}</p>
        </section>
      ))}
    </div>
  )
}
