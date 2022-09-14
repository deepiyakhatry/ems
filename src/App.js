import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Employee from './components/Employee/Employee';
import EmployeeData from './components/Employee/EmployeeData';
import EditUser from './components/Register/EditUser';
import EditEmployee from './components/Employee/EditEmployee';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee-data' element={<EmployeeData />} />
          <Route path='/editemployee/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
