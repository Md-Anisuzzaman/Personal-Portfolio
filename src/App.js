import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header';
import Skill from './Components/Skill/Skill';
import Project from './Components/Project/Project';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home></Home>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
