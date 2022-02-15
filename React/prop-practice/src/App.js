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
      lastName = {'Smith'}  firstName = {'Jane'}
      age={ 58 }
      hairColor= {'Black'}
      />
      <Card  
      lastName = {'Fillmore'}  firstName = {'Millard'}
      age={ 43 }
      hairColor= {' Brown '}
      />
      <Card  
      lastName = {'Smith'}  firstName = {'Maria'}
      age={ 62 }
      hairColor= {'Auburn'}
      />
    </div>
  );
}

export default App;
