import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<CodeForInterview/>}/>
      <Route path='all' element={<AllUsers/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>} />
     </Routes>
    </div>
  );
}

export default App;
