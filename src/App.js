import './App.css';
import NavBar from './component/navBar';
import Home from './component/Home';
import About from './component/About';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import { Routes, Route } from 'react-router-dom';
import AboutReact from './component/stacks/React/React';
import Django from './component/stacks/Django/Django';
import Node from './component/stacks/Node/Node';
import Laravel from './component/stacks/Laravel/Laravel';
import Ui from './component/stacks/UI-UX/Ui';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/react' element={<AboutReact />} />
        <Route path='/node' element={<Node />} />
        <Route path='/ui' element={<Ui />} />
        <Route path='/django' element={<Django />} />
        <Route path='/laravel' element={<Laravel />} />
      </Routes>
    </div>
  );
}

export default App;
 