import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Fetchdata from './components/Fetchdata';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/general' element={<Fetchdata cat="general"/>}/>
        <Route path='/business' element={<Fetchdata cat="business"/>}/>
        <Route path='/entertainment' element={<Fetchdata cat="entertainment"/>}/>
        <Route path='/health' element={<Fetchdata cat="health"/>}/>
        <Route path='/science' element={<Fetchdata cat="science"/>}/>
        <Route path='/sports' element={<Fetchdata cat="sports"/>}/>
        <Route path='/technology' element={<Fetchdata cat="technology"/>}/>
      </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
