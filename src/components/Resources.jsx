import React from 'react'

export default function Resources(){
  const resources = [
    {title: 'Basic Sanskrit Grammar PDF', icon: '📝', size: '2.5 MB', type: 'PDF'},
    {title: 'Common Slokas Collection', icon: '🙏', size: '1.8 MB', type: 'PDF'},
    {title: 'Devanagari Script Practice Sheets', icon: '✍️', size: '3.2 MB', type: 'PDF'},
    {title: 'Sanskrit Vocabulary Builder', icon: '📚', size: '1.5 MB', type: 'PDF'},
    {title: 'Pronunciation Guide Audio', icon: '🎧', size: '12 MB', type: 'MP3'},
    {title: 'External: Digital Sanskrit Resources', icon: '🌐', size: 'Link', type: 'Web'}
  ]

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)'}}>
        <h2>📚 Learning Resources</h2>
        <p>Downloadable PDFs, audio files, and useful references to support your Sanskrit learning journey.</p>
      </section>

      <div className="grid">
        {resources.map((r, i) => (
          <div key={i} className="card" style={{cursor: 'pointer', transition: 'all 0.3s'}}>
            <div style={{fontSize: '2.5rem', marginBottom: '12px'}}>{r.icon}</div>
            <h3 style={{fontSize: '1.1rem', marginBottom: '8px'}}>{r.title}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px'}}>
              <span style={{background: '#9C27B0', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold'}}>{r.type}</span>
              <span style={{color: '#666', fontSize: '0.9rem'}}>{r.size}</span>
            </div>
            <button style={{marginTop: '12px', width: '100%'}}>⬇️ Download</button>
          </div>
        ))}
      </div>
    </div>
  )
}
