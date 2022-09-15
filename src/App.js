import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ExpenseRegistration from './components/ExpenseRegistration/ExpenseRegistration';
import EditExpenseRegistration from './components/ExpenseRegistration/EditExpenseRegistration';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseListData from './components/ExpenseList/ExpenseListData';
import EditExpenseList from './components/ExpenseList/EditExpenseList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/expense-register' element={<ExpenseRegistration />} />
          <Route path='/edituser/:id' element={<EditExpenseRegistration />} />
          <Route path='/expense-list' element={<ExpenseList />} />
          <Route path='/expense-list-data' element={<ExpenseListData />} />
          <Route path='/editemployee/:id' element={<EditExpenseList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
