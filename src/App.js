import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import Footer from './component/Footer';
import Cards from './component/cards/Cards';
import About from './component/About';
import { Routes,Route } from 'react-router-dom';
import Register from './component/signup/Register';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
       {/* < Home />
       <Cards />
        <About />  */}
      <Routes>
    
       <Route path='SignUp' element={<Register />} />
        <Route path='login' element={<Login />} />
      
        
        </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
 