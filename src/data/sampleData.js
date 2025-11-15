const sample = {
  daily: [
    { date: '2025-11-14', sanskrit: 'नमस्ते (Namaste)', meaning: 'I bow to the divine in you (hello/greeting)', emoji: '🙏' },
    { date: '2025-11-13', sanskrit: 'शान्तिः (Shanti)', meaning: 'Peace', emoji: '☮️' },
    { date: '2025-11-12', sanskrit: 'आनन्दः (Ananda)', meaning: 'Bliss, Joy', emoji: '😊' }
  ],
  courses: [
    { id: 1, name: 'Sanskrit Basics', duration: '8 weeks', fee: '₹4,000', level: 'Beginner', emoji: '🌱' },
    { id: 2, name: 'Intermediate Sanskrit', duration: '10 weeks', fee: '₹6,000', level: 'Intermediate', emoji: '🌿' },
    { id: 3, name: 'Advanced Sanskrit & Slokas', duration: '12 weeks', fee: '₹8,000', level: 'Advanced', emoji: '🌳' }
  ],
  slokas: [
    { 
      id:1, 
      text: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः', 
      meaning: 'May all be happy, may all be free from illness.',
      category: 'Peace',
      emoji: '🕊️'
    },
    { 
      id:2, 
      text: 'असतो मा सद्गमय', 
      meaning: 'Lead me from untruth to truth.',
      category: 'Wisdom',
      emoji: '💡'
    },
    { 
      id:3, 
      text: 'तमसो मा ज्योतिर्गमय', 
      meaning: 'Lead me from darkness to light.',
      category: 'Enlightenment',
      emoji: '✨'
    }
  ],
  testimonials: [
    { id:1, name: 'Srujana Aouk', text: 'Wonderful teacher — clear explanations and engaging lessons. I learned so much!', rating: 5, emoji: '⭐' },
    { id:2, name: 'Swarith Patpi', text: 'The course structure is excellent. Highly recommend for anyone interested in Sanskrit.', rating: 5, emoji: '⭐' },
    { id:3, name: 'Samvedh Patpi', text: 'Cultural insights combined with language learning make this unique and valuable.', rating: 5, emoji: '⭐' }
  ]
}

export default sample
