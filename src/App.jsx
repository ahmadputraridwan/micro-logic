import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TicTacToePage from './Routing/TicTacToePage'
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
        <Route path='/tictactoe' element={<TicTacToePage />} />
      </Routes>
    </Router>
  )
}

export default App
