import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import Footer from './component/Footer';
import Cards from './component/cards/Cards';
import About from './component/About';
// import Register from './component/signup/Register';
// import Login from './component/login/Login';
// import { Routes, Route } from 'react-router-dom';
import AboutReact from './component/stacks/React/React';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutReact />
      {/* <Home />
      <Cards />
      <About />
      <Footer /> */}
      {/* <Routes>
        <Route path='/signup' element={ <Register />} />
        <Route path='/login' element={<Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
 