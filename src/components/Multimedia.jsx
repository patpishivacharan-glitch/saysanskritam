import React from 'react'

export default function Multimedia(){
  const videos = [
    {title: 'Introduction to Sanskrit', duration: '12:45', views: '2.5K'},
    {title: 'Devanagari Script Basics', duration: '18:20', views: '1.8K'},
    {title: 'Common Greetings & Phrases', duration: '15:30', views: '3.2K'},
    {title: 'Chanting Techniques', duration: '22:15', views: '1.5K'}
  ]

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)'}}>
        <h2>🎥 Multimedia Gallery</h2>
        <p>Watch lesson videos, chanting demonstrations, and practice sessions to enhance your learning.</p>
      </section>

      <div className="grid">
        {videos.map((v, i) => (
          <div key={i} className="card" style={{position: 'relative'}}>
            <div style={{background: 'linear-gradient(135deg, #009688 0%, #00796B 100%)', height: '160px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px'}}>
              <div style={{fontSize: '4rem', color: 'rgba(255,255,255,0.8)'}}>▶️</div>
            </div>
            <h3 style={{fontSize: '1.1rem', marginBottom: '8px'}}>{v.title}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.9rem'}}>
              <span>⏱️ {v.duration}</span>
              <span>👁️ {v.views}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="card" style={{background: '#FFF9F5', textAlign: 'center'}}>
        <p style={{fontSize: '1.1rem', color: '#666'}}>More videos coming soon! Subscribe to our YouTube channel for updates.</p>
        <button style={{marginTop: '12px'}}>🔔 Subscribe on YouTube</button>
      </section>
    </div>
  )
}
