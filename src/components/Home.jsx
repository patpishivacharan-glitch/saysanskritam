import React from 'react'
import sample from '../data/sampleData'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div>
          <h1>🙏 Welcome to Saysanskritam</h1>
          <p>Learn Sanskrit, explore cultural insights, and celebrate India's heritage.</p>
          <p><strong>📅 Daily tip:</strong> {sample.daily[0].sanskrit} — {sample.daily[0].meaning}</p>
        </div>
        <img src="/posters/diwali.svg" alt="Indian art" />
      </section>

      <section className="card">
        <h2>✨ Why Learn Sanskrit?</h2>
        <p>
          Sanskrit is not only the root of many Indian languages, but also a tremendous repository
          of philosophy, poetry and scientific thought. Our courses combine language, culture,
          and chanting for a holistic learning experience.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h3>📚 Courses</h3>
          <p>From beginner to advanced—structured lessons, flexible timing.</p>
        </div>
        <div className="card">
          <h3>🙏 Slokas & Meanings</h3>
          <p>Read original Sanskrit slokas with clear explanations and context.</p>
        </div>
        <div className="card">
          <h3>🌍 Community</h3>
          <p>Join students worldwide who share a passion for India's culture.</p>
        </div>
      </section>
    </div>
  )
}
