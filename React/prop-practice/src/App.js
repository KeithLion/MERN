import './App.css';
import Card from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard  
      fullName = {'Doe,John'}
      age={20}
      hairColor= {'Light Brown'}
      />
    </div>
  );
}

export default App;
