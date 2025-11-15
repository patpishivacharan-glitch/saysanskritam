import React from 'react'

export default function About(){
  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #FFE5D9 0%, #FFD1BA 100%)'}}>
        <h2>👤 About Me</h2>
        <p style={{fontSize: '1.1rem'}}>Namaste! 🙏 I am Dr. Rahul Maity a passionate Sanskrit teacher with several years of experience teaching students worldwide.</p>
        <p style={{fontSize: '1.1rem'}}>My mission is to spread Indian culture and make Sanskrit accessible, enjoyable, and meaningful for everyone.</p>
      </section>

      <section className="card">
        <h3>🎓 Credentials & Experience</h3>
        <ul style={{fontSize: '1.05rem'}}>
          <li>📜 MA in Sanskrit (University)</li>
          <li>👥 Years of teaching experience in group and private classes</li>
          <li>🌍 Teaching students across multiple countries</li>
          <li>💡 Specialized in cultural context and practical application</li>
        </ul>
      </section>

      <section className="card">
        <h3>❤️ My Teaching Philosophy</h3>
        <p>Sanskrit is not just a language—it's a gateway to understanding ancient wisdom, philosophy, and culture. I believe in making learning interactive, engaging, and fun while respecting the depth of this sacred language.</p>
      </section>
    </div>
  )
}
