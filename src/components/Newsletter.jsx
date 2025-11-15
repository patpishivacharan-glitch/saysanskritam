import React, {useState} from 'react'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    console.log('Newsletter signup', email)
    setSubscribed(true)
  }

  return (
    <div>
      <section className="card" style={{background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)', textAlign: 'center', padding: '48px 28px'}}>
        <div style={{fontSize: '4rem', marginBottom: '16px'}}>📧</div>
        <h2 style={{marginBottom: '16px'}}>Subscribe to Our Newsletter</h2>
        <p style={{fontSize: '1.1rem', marginBottom: '24px'}}>Get weekly Sanskrit tips, cultural insights, festival updates, and exclusive content delivered to your inbox!</p>
        
        {subscribed ? (
          <div style={{padding: '32px', background: '#E8F5E9', borderRadius: '12px', display: 'inline-block'}}>
            <div style={{fontSize: '3rem', marginBottom: '12px'}}>✅</div>
            <h3 style={{color: '#4CAF50', marginBottom: '8px'}}>Welcome Aboard!</h3>
            <p style={{color: '#666', margin: 0}}>Check your email for a confirmation message.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{maxWidth: '500px', margin: '0 auto'}}>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <input 
                type="email" 
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                required 
                placeholder="Enter your email address"
                style={{flex: 1, minWidth: '250px'}}
              />
              <button type="submit" style={{whiteSpace: 'nowrap'}}>✨ Subscribe Now</button>
            </div>
          </form>
        )}
      </section>

      <div className="grid" style={{marginTop: '24px'}}>
        <div className="card" style={{textAlign: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>📝</div>
          <h3>Weekly Tips</h3>
          <p>Sanskrit words, phrases, and grammar insights</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🎉</div>
          <h3>Festival Updates</h3>
          <p>Celebration guides and cultural context</p>
        </div>
        <div className="card" style={{textAlign: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '8px'}}>🎁</div>
          <h3>Exclusive Content</h3>
          <p>Special offers and early access to resources</p>
        </div>
      </div>
    </div>
  )
}
