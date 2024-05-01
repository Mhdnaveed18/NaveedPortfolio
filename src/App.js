import './App.css';
import Navbar from './Pages/Navbar';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Profession from './Pages/Profession';
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/Education' element={<Education/>} />
          <Route path='/Profession' element={<Profession/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='*' element={<Homepage/>} />
        </Routes>
    </div>
  );
}

export default App;
