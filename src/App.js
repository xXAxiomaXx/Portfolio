import './App.css';
import Main from './Components/pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './Components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    </BrowserRouter>
  );
}



export default App


