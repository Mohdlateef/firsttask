import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import Sidebar from './Components/sidebar';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div style={{
      display:'flex',
      width:"100vw",
      height:"100vh",
    }}>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
