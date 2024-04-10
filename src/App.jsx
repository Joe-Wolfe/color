import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';
import NoMatch from './NoMatch';
import './App.css'

function App() {
  const [color, setColor] = useState([])

  function addColor(col) {
    setColor([...color, col])
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/color/:color" element={<ColorDetail />} />
          <Route path="/color/new" element={<ColorForm addColor={addColor} />} />
          <Route path="/color" element={<ColorList colorList={color} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

      </Router>


    </>
  )
}

export default App
