import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimda" element={<AboutPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
