import React, { useState } from 'react'
import sample from '../data/sampleData'
import syllabus from '../data/syllabus'

const levelColors = {
  'Beginner': '#4CAF50',
  'Intermediate': '#FF9800',
  'Advanced': '#9C27B0'
}

export default function Courses(){
  const [openKey, setOpenKey] = useState(null)

  const toggle = (key) => {
    setOpenKey(openKey === key ? null : key)
  }

  const syllabusMap = {
    'Sanskrit Basics': syllabus.basics,
    'Intermediate Sanskrit': syllabus.intermediate,
    'Advanced Sanskrit & Slokas': syllabus.advanced
  }

  return (
    <div>
      <section className="card">
        <h2>📚 Courses Offered</h2>
        <p>We offer structured courses from basic to advanced levels with personalized attention.</p>
        <p style={{fontSize:'0.9rem', color:'#555'}}>Click a course to view detailed syllabus modules. Replace placeholder syllabus data in <code>src/data/syllabus.js</code> with the extracted PDF content.</p>
      </section>

      <section className="grid">
        {sample.courses.map(c => {
          const s = syllabusMap[c.name]
          const isOpen = openKey === c.name
          return (
            <div key={c.id} className="card" style={{borderTop: `4px solid ${levelColors[c.level]}`}}>
              <h3 style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>{c.name}</span>
                <button type="button" onClick={()=>toggle(c.name)} style={{background: 'linear-gradient(135deg,#FF6B35,#C1121F)', fontSize:'12px', padding:'6px 12px'}}>
                  {isOpen ? 'Hide Syllabus' : 'View Syllabus'}
                </button>
              </h3>
              <p><strong>🎯 Level:</strong> <span style={{color: levelColors[c.level]}}>{c.level}</span></p>
              <p><strong>⏱️ Duration:</strong> {c.duration}</p>
              <p><strong>💰 Fee:</strong> {c.fee}</p>
              <p><strong>📖 Curriculum:</strong> Basic grammar, reading, chanting and cultural context.</p>
              {s && isOpen && (
                <div style={{marginTop:'12px', background:'#FFF9F5', padding:'12px 14px', borderRadius:'8px', border:'1px solid #f2d6c9'}}>
                  <h4 style={{margin:'4px 0 12px', color:'#C1121F'}}>Detailed Syllabus</h4>
                  <p style={{margin:'0 0 12px', fontSize:'0.95rem'}}>{s.overview}</p>
                  {s.modules.map((m,i)=>(
                    <div key={i} style={{marginBottom:'12px'}}>
                      <strong>{m.name}</strong>
                      <ul style={{margin:'6px 0 6px 18px', padding:0}}>
                        {m.topics.map((t,j)=>(<li key={j} style={{marginBottom:'4px'}}>{t}</li>))}
                      </ul>
                      <em style={{color:'#555', fontSize:'0.85rem'}}>Outcome: {m.outcome}</em>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </section>
      {/* Five-Level Speaking Sanskrit Syllabus */}
      {syllabus.speakingFiveLevel && (
        <section className="card" style={{marginTop:'32px'}}>
          <h2>🗣️ {syllabus.speakingFiveLevel.title}</h2>
          <p style={{marginTop:'8px'}}><strong>Estimated Duration:</strong> {syllabus.speakingFiveLevel.estimate}</p>
          <p style={{fontSize:'0.9rem', color:'#555'}}>Contact: {syllabus.speakingFiveLevel.contact.teacher} • Email: {syllabus.speakingFiveLevel.contact.email} • WhatsApp: {syllabus.speakingFiveLevel.contact.whatsapp}</p>
          <details style={{marginTop:'12px'}}>
            <summary style={{cursor:'pointer', fontWeight:'600'}}>Study Material & Class Structure</summary>
            <ul style={{margin:'12px 0 8px 20px'}}>
              {syllabus.speakingFiveLevel.studyMaterial.map((m,i)=>(<li key={i}>{m}</li>))}
            </ul>
            <p style={{margin:'4px 0'}}><strong>Per Class:</strong> Gītā Chanting {syllabus.speakingFiveLevel.classStructure.gitaChanting}, Grammar & Language {syllabus.speakingFiveLevel.classStructure.grammarLanguage}, Subhāṣitam {syllabus.speakingFiveLevel.classStructure.subhashitam}, Q & A {syllabus.speakingFiveLevel.classStructure.qaSession}</p>
            <ul style={{margin:'12px 0 8px 20px'}}>
              {syllabus.speakingFiveLevel.keyNotes.map((n,i)=>(<li key={i}>{n}</li>))}
            </ul>
          </details>
          <div style={{marginTop:'20px'}}>
            {syllabus.speakingFiveLevel.levels.map(l => (
              <div key={l.level} className="card" style={{background:'#FFF9F5', border:'1px solid #f2d6c9', marginBottom:'16px'}}>
                <h3 style={{marginTop:0, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span>Level {l.level}: {l.name}</span>
                  <span style={{fontSize:'0.75rem', background:'#FF6B35', color:'#fff', padding:'4px 8px', borderRadius:'6px'}}>{l.duration}</span>
                </h3>
                <p style={{margin:'4px 0 10px', fontSize:'0.95rem'}}>{l.focus}</p>
                {l.modules && l.modules.length > 0 && (
                  <ul style={{margin:'0 0 10px 18px'}}>
                    {l.modules.map((m,i)=>(<li key={i}><strong>{m.range ? m.range+':' : ''}</strong> {m.summary}</li>))}
                  </ul>
                )}
                {l.outcomes && (
                  <details>
                    <summary style={{cursor:'pointer', fontWeight:'600'}}>Outcomes</summary>
                    <ul style={{margin:'8px 0 0 18px'}}>
                      {l.outcomes.map((o,i)=>(<li key={i}>{o}</li>))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.75rem', color:'#777', marginTop:'8px'}}>{syllabus.speakingFiveLevel.disclaimer}</p>
        </section>
      )}
    </div>
  )
}
