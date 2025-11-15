import React from 'react'
import sample from '../data/sampleData'

const levelColors = {
  'Beginner': '#4CAF50',
  'Intermediate': '#FF9800',
  'Advanced': '#9C27B0'
}

export default function Courses(){
  return (
    <div>
      <section className="card">
        <h2>📚 Courses Offered</h2>
        <p>We offer structured courses from basic to advanced levels with personalized attention.</p>
      </section>

      <section className="grid">
        {sample.courses.map(c => (
          <div key={c.id} className="card" style={{borderTop: `4px solid ${levelColors[c.level]}`}}>
            <h3>{c.name}</h3>
            <p><strong>🎯 Level:</strong> <span style={{color: levelColors[c.level]}}>{c.level}</span></p>
            <p><strong>⏱️ Duration:</strong> {c.duration}</p>
            <p><strong>💰 Fee:</strong> {c.fee}</p>
            <p><strong>📖 Curriculum:</strong> Basic grammar, reading, chanting and cultural context.</p>
          </div>
        ))}
      </section>
    </div>
  )
}
