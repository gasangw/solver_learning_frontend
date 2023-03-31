import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import Footer from './component/Footer';
import Cards from './component/cards/Cards';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Cards />
      <About />
      <Footer />
    </div>
  );
}

export default App;
 