import React from 'react'
import sample from '../data/sampleData'

export default function Blog(){
  return (
    <div>
      <section className="card">
        <h2>📝 Daily Sanskrit Posts</h2>
        <p>Short words/phrases with meanings and small cultural notes. Learn something new every day!</p>
      </section>

      {sample.daily.map((d,i)=> (
        <article key={i} className="card" style={{borderLeft: '6px solid #FF6B35'}}>
          <h3>{d.emoji} {d.sanskrit}</h3>
          <p style={{fontSize: '1.1rem', color: '#555'}}>{d.meaning}</p>
          <small style={{color: '#999'}}>📅 {d.date}</small>
        </article>
      ))}
    </div>
  )
}
