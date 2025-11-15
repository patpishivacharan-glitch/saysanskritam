import React from 'react'

export default function Offerings(){
  const offerings = [
    {icon: '👤', title: 'Personalized 1:1 Lessons', desc: 'Tailored lessons matching your pace and goals'},
    {icon: '👥', title: 'Group Classes', desc: 'Learn together with fellow enthusiasts'},
    {icon: '🎭', title: 'Cultural Workshops', desc: 'Deep dives into traditions and philosophy'},
    {icon: '🎶', title: 'Chanting Sessions', desc: 'Master proper pronunciation and rhythm'},
    {icon: '📚', title: 'PDF Resources', desc: 'Comprehensive study materials'},
    {icon: '🎯', title: 'Customized Programs', desc: 'Specialized courses for your needs'}
  ]

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)'}}>
        <h2>💼 Offerings & Services</h2>
        <p>Explore our comprehensive range of Sanskrit learning services designed for students of all levels.</p>
      </section>

      <div className="grid">
        {offerings.map((item, i) => (
          <div key={i} className="card" style={{textAlign: 'center'}}>
            <div style={{fontSize: '3rem', marginBottom: '12px'}}>{item.icon}</div>
            <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>{item.title}</h3>
            <p style={{color: '#666'}}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
