import './App.css';
import UserForm from './components/form';
import Display from './components/display';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');

  return (
    <div className='App'>
      <UserForm
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      />

      <Display 
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
    </div>
  );
}

export default App;
