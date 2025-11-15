import React from 'react'
import sample from '../data/sampleData'

const categoryColors = {
  'Peace': '#4CAF50',
  'Wisdom': '#2196F3',
  'Enlightenment': '#FF9800'
}

export default function Slokas(){
  return (
    <div>
      <section className="card">
        <h2>🙏 Slokas & Meanings</h2>
        <p>A curated collection of popular slokas with detailed explanations and cultural context.</p>
      </section>
      {sample.slokas.map(s => (
        <article key={s.id} className="card" style={{borderTop: `5px solid ${categoryColors[s.category] || '#FF6B35'}`}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
            <span style={{fontSize: '2rem'}}>{s.emoji}</span>
            <span style={{background: categoryColors[s.category] || '#FF6B35', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold'}}>{s.category}</span>
          </div>
          <h3 style={{fontSize: '1.5rem', color: '#C1121F', fontStyle: 'italic'}}>{s.text}</h3>
          <p style={{fontSize: '1.1rem', color: '#555', marginTop: '12px'}}>{s.meaning}</p>
        </article>
      ))}
    </div>
  )
}
