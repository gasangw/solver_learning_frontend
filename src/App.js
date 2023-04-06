import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import Footer from './component/Footer';
import Cards from './component/cards/Cards';
import About from './component/About';
// import { Routes, Route } from 'react-router-dom';
// import AboutReact from './component/stacks/React/React';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <AboutReact /> */}
      <Home />
      <Cards />
      <About />
      <Footer />
    </div>
  );
}

export default App;
 