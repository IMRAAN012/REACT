import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './pages/Header';
import Home from "./page/Home";
import About from "./page/about";
import Profile from "./page/profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      </div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
