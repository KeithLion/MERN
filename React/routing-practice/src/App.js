import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'
import Hello from './components/Hello'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/:intorword' element={<Hello/>}/>
      <Route path=':word:fontColor:backgroundColor' element={<Number/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
