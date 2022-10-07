import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/checkout' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<h1>vivek is gr8</h1>}/>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
