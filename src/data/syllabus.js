// Placeholder syllabus data. Replace with real extracted text from your PDF.
// For each course, provide modules, topics, outcomes.

const syllabus = {
  basics: {
    title: 'Sanskrit Basics',
    duration: '8 weeks',
    overview: 'Introduction to Devanagari script, foundational pronunciation, simple vocabulary, and essential grammar constructs.',
    modules: [
      {
        name: 'Week 1: Script & Sounds',
        topics: ['Vowels (Svaras)', 'Consonants (Vyanjanas)', 'Transliteration basics', 'Pronunciation drills'],
        outcome: 'Accurate reading and writing of the core alphabet.'
      },
      {
        name: 'Week 2: Sandhi Introduction',
        topics: ['Basic word joining examples', 'Common vowel sandhi patterns'],
        outcome: 'Recognize simple sandhi in beginner texts.'
      }
    ]
  },
  intermediate: {
    title: 'Intermediate Sanskrit',
    duration: '10 weeks',
    overview: 'Verb conjugations, noun declensions depth, syntax patterns, and introduction to meters.',
    modules: [
      {
        name: 'Week 1: Noun Declensions Review',
        topics: ['Masculine a-stem', 'Feminine ā-stem', 'Neuter nouns'],
        outcome: 'Decline common nouns confidently.'
      }
    ]
  },
  advanced: {
    title: 'Advanced Sanskrit & Slokas',
    duration: '12 weeks',
    overview: 'Chandas (meter), advanced sandhi, compound formation (samāsa), and guided sloka translation.',
    modules: [
      {
        name: 'Week 1: Compound Formation',
        topics: ['Tatpurusha', 'Karmadhāraya', 'Bahuvrīhi'],
        outcome: 'Break down and form basic compounds.'
      }
    ]
  },
  speakingFiveLevel: {
    title: 'Five-Level Speaking Sanskrit Course',
    contact: {
      email: 'saysanskritam@gmail.com',
      teacher: 'Dr. Rahul Maity',
      whatsapp: '+91 8513813487'
    },
    estimate: 'Approx. 1 year total (Levels 1–5)',
    levels: [
      {
        level: 1,
        name: 'Foundations: Script & Survival Expressions',
        duration: '2 months (16 classes)',
        focus: 'Devanagari mastery, basic spoken sentences, initial vocabulary.',
        modules: [
          { range: 'Items 1–6', summary: 'Alphabet (Varnamala), vowels, consonants, pronunciation drills.' },
          { range: 'Items 7–12', summary: 'Practice similar letters, conjunct consonants (क्ष, त्र, ज्ञ), mātrā introduction.' },
          { range: 'Items 13–18', summary: 'Writing practice (words, basic sentences), numbers, vocabulary list.' }
        ],
        outcomes: [
          'Read & write core Devanagari letters accurately.',
          'Speak simple classroom & daily routine sentences.',
          'Understand basic number system & word formation.'
        ]
      },
      {
        level: 2,
        name: 'Core Structures & Pronouns (Stage 1)',
        duration: '3 months (24 classes)',
        focus: 'Gender forms, pronouns, present tense verb paradigms.',
        modules: [
          { range: 'Items 19–28', summary: 'Demonstratives (eṣaḥ / eṣā / etat), gendered forms, interrogatives (kaḥ / kā / kim).' },
          { range: 'Items 29–38', summary: 'Verb “astu/asmi/asi” patterns, personal endings, present tense introduction.' },
          { range: 'Items 39–44', summary: 'Addressing (bhavān / bhavatī), second person forms, plural distinctions.' }
        ],
        outcomes: [
          'Form and use basic pronouns across genders & numbers.',
          'Conjugate essential verbs in present tense forms.',
          'Hold short descriptive dialogues about people & objects.'
        ]
      },
      {
        level: 2.2,
        name: 'Cases & Commands (Stage 2)',
        duration: '3 months (24 classes)',
        focus: 'Accusative usage, imperative (loṭ), tense expansion.',
        modules: [
          { range: 'Items 45–55', summary: 'Accusative singular across genders; imperative forms (madhyama & prathama puruṣa).'},
          { range: 'Items 56–63', summary: 'Loṭ across numbers; past tense (laṅ); participle (ktvā/ktvavatu) introduction.'},
          { range: 'Items 64–70', summary: 'Future tense basics, verbal derivatives (tumun / ktvā / lyap).'}
        ],
        outcomes: [
          'Issue polite commands & requests in correct forms.',
          'Narrate simple past actions & planned future tasks.',
          'Use verbal participles to link sequential actions.'
        ]
      },
      {
        level: 2.3,
        name: 'Case Mastery & Vocabulary (Stage 3)',
        duration: '4 months (32 classes)',
        focus: 'Instrumental, dative, ablative, genitive, locative, counting & time.',
        modules: [
          { range: 'Items 71–80', summary: 'Instrumental (tṛtīyā) & dative (caturthī) usages, ablative & genitive relations.'},
          { range: 'Items 81–90', summary: 'Locative contexts, number forms up to 20, time expressions, vocabulary drills.'},
          { range: 'Items 91–99', summary: 'Case-focused slokas, subhāṣitam integration, reinforced declension practice.'}
        ],
        outcomes: [
          'Employ all primary cases in everyday and narrative contexts.',
          'Interpret simple verses highlighting grammatical patterns.',
          'Expand active vocabulary through structured repetition.'
        ]
      },
      {
        level: 3,
        name: 'Refinement & Simple Literature',
        duration: 'Estimated 2–3 months',
        focus: 'Improving fluency, reading short stories & dialogues.',
        modules: [
          { summary: 'Guided reading of selected short stories for vocabulary growth.' },
          { summary: 'Dialogic drills for everyday & thematic situations.' },
          { summary: 'Intro to metre awareness & proper chanting rhythm.' }
        ],
        outcomes: [
          'Read graded prose with minimal assistance.',
          'Sustain conversations beyond routine topics.',
          'Accurately chant selected ślokas with metre sensitivity.'
        ]
      },
      {
        level: 4,
        name: 'Higher Literary Exposure',
        duration: 'Estimated 2–3 months',
        focus: 'Engaging with mid-level literary passages & style.',
        modules: [
          { summary: 'Study of higher-level short literary pieces & idioms.' },
          { summary: 'Practice forming simple compounds & elevated expressions.' },
          { summary: 'Written Sanskrit: crafting short descriptive paragraphs.' }
        ],
        outcomes: [
          'Recognize literary idioms & expressive variants.',
          'Write short original passages with basic stylistic devices.',
          'Comprehend context-driven compound usage.'
        ]
      },
      {
        level: 5,
        name: 'Comprehensive Literary & Commentary Skills',
        duration: 'Estimated 2–4 months',
        focus: 'Understanding & expressing literary + spoken Sanskrit fully.',
        modules: [
          { summary: 'Reading with commentaries for deeper semantic layers.' },
          { summary: 'Advanced vocabulary consolidation & semantic nuance.' },
          { summary: 'Oral summaries & written reflections of passages.' }
        ],
        outcomes: [
          'Comfortably read standard literature with commentary support.',
          'Express nuanced ideas orally & in writing.',
          'Navigate grammatical constructs across tense, mood, and case seamlessly.'
        ]
      }
    ],
    studyMaterial: [
      'Varnamala practice sheets (Devanagari focus)',
      'Vākyavyavahāra pictorial communicative exercises',
      'Selected short stories for vocabulary building',
      'Śrīmad Bhagavad Gītā allocated chant time each class',
      'Daily Subhāṣitam for moral & stylistic appreciation',
      '30+ Stotrams with word-by-word meaning & recitation',
      '100+ Daily prayer ślokas (1 per day cycle)'
    ],
    classStructure: {
      gitaChanting: '15 minutes',
      grammarLanguage: '35 minutes',
      subhashitam: '5 minutes',
      qaSession: '5 minutes'
    },
    keyNotes: [
      'Primary script: Devanagari (transliteration only if essential).',
      'Focus on ancient Indian knowledge & cultural references.',
      'Speaking + reading emphasized; consistent daily homework expected.',
      'Two classes per week plus WhatsApp micro-activities.',
      'Teacher reachable via WhatsApp for clarifications.'
    ],
    disclaimer: 'This structured representation adapts the provided syllabus text. Please review and refine to match official materials before publishing.'
  }
}

export default syllabus
