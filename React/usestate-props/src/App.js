import './App.css';
import Card from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <Card  
      lastName = {'Doe'}  firstName = {'John'}
      age={ 20 }
      hairColor= {'Light Brown'}
      />
      <Card  
      lastName = {'Smith'}  firstName = {'Anton'}
      age={ 45 }
      hairColor= {'Light Brown'}
      />
    </div>
  );
}

export default App;
