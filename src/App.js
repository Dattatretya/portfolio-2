import Body from "./components/Body";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Work from "./components/Work";
import Contact from "./components/Contact"
import About from "./components/About";
import Footer from "./components/Footer";
import FunLogin from "./components/FunLogin";




function App() {
  return (
    
    <div className="text-cyan-200 font-serif h-[1000px]" >
    <BrowserRouter>
    <div className="sticky top-0">
    <Header/>
    </div>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/funlogin" element={<FunLogin/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
