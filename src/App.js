import logo from './logo.svg';
import './App.css';
import AddSmart from './components/AddSmart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchSmart from './components/SearchSmart';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<AddSmart/>}/>
    <Route path='/search'  element={<SearchSmart/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
