import './App.css';
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
import Lesson2 from './component/Lessons/React/Lesson2';
import Lesson1 from './component/Lessons/React/Lesson1';
import Lesson3 from './component/Lessons/React/Lesson3';
import Lesson4 from './component/Lessons/React/Lesson4';
import Assingment from './component/Lessons/React/Assingment';
import ResetPassword from './component/auth/ResetPassword';

function App() {
  return (
    <div className="App">
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
        <Route path='/react/lesson1' element={<Lesson1 />} />
        <Route path='/react/lesson2' element={<Lesson2 />} />
        <Route path='/react/lesson3' element={<Lesson3 />} />
         <Route path='/react/lesson4' element={<Lesson4 />} />

        <Route path='/react/lessons/assignment' element={<Assingment />} />
        <Route path='/Resetpassword' element={<ResetPassword/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
 