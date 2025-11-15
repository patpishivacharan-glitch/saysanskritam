import React from 'react'
import sample from '../data/sampleData'

export default function Testimonials(){
  return (
    <div>
      <section className="card">
        <h2>⭐ Student Testimonials</h2>
        <p>Hear what our students have to say about their learning experience!</p>
      </section>
      <div className="grid">
        {sample.testimonials.map(t => (
          <div key={t.id} className="card" style={{background: 'linear-gradient(135deg, #FFF9F5 0%, #FFE5D9 100%)'}}>
            <div style={{fontSize: '2rem', marginBottom: '8px'}}>👤</div>
            <p style={{fontSize: '1.1rem', fontWeight: 'bold', color: '#C1121F', marginBottom: '8px'}}>{t.name}</p>
            <div style={{color: '#FF9800', marginBottom: '12px'}}>{'⭐'.repeat(t.rating)}</div>
            <blockquote style={{borderLeft: '4px solid #FF6B35', margin: 0}}>{t.text}</blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}
