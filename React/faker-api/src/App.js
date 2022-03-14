import './App.css';
const express = require('express')
const faker = require('faker');
const app = express();
const port = 8000;

app.get('/api',(req,res) => {
  res.send('Sending')
}
)
function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
