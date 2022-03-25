import './App.css';
import UpdateProduct from './components/updateProduct';
import OneProduct from './components/oneProduct';
import Main from './views/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App=()=> {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path ='/' default/>
        <Route element={<UpdateProduct />} path ='/products1/update/:id' />
        <Route element={<OneProduct />} path ='/products1/:id' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
