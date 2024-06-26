import logo from './logo.svg';
import './App.css';
// import Readss from './components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    
    <Route exact path="/" element={<Create/>}></Route>
    <Route exact path="/read" element={<Read/>}></Route>
    <Route exact path="/update" element={<Update/>}></Route>
  
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
