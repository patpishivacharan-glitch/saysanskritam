import React from 'react'

export default function Posters(){
  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'}}>
        <h2>🎨 Festival Greetings Posters</h2>
        <p>Download beautiful posters for major Indian festivals, complete with cultural significance and traditional greetings.</p>
      </section>

      <div className="card">
        <h3>🪔 Diwali Poster</h3>
        <img src="/posters/diwali.svg" alt="Diwali poster" style={{maxWidth: '100%', borderRadius: '12px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)'}} />
        <p style={{marginTop: '16px'}}><a href="/posters/diwali.svg" download style={{padding: '10px 20px', background: 'linear-gradient(135deg, #FF6B35 0%, #C1121F 100%)', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block'}}>⬇️ Download SVG</a></p>
        <div style={{background: '#FFF9F5', padding: '16px', borderRadius: '8px', marginTop: '16px'}}>
          <p><strong>🕯️ Cultural Significance:</strong> Diwali celebrates the victory of light over darkness, knowledge over ignorance, and good over evil. It's one of the most important festivals in Indian culture.</p>
        </div>
      </div>
    </div>
  )
}
