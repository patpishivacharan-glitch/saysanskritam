import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import Blog from './components/Blog'
import Slokas from './components/Slokas'
import Posters from './components/Posters'
import Testimonials from './components/Testimonials'
import Offerings from './components/Offerings'
import Inquiry from './components/Inquiry'
import FAQ from './components/FAQ'
import Resources from './components/Resources'
import Multimedia from './components/Multimedia'
import Newsletter from './components/Newsletter'

export default function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/slokas" element={<Slokas />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>© Saysanskritam — Spreading Sanskrit and Indian culture worldwide</p>
      </footer>
    </div>
  )
}
