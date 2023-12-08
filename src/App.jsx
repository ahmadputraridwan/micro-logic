import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WordScramblePage from './Routing/WordScramblePage'
import SalaryCalcPage from './Routing/SalaryCalcPage'
import ConverterPage from './Routing/ConverterPage'
import CountdownPage from './Routing/CountdownPage'
import HomePage from './Routing/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/salarycalc" element={<SalaryCalcPage />} />
        <Route path="/wordscramble" element={<WordScramblePage />} />
      </Routes>
    </Router>
  )
}

export default App
