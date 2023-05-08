import './App.css';
import { Router, Route, Outlet, Routes } from 'react-router-dom';
import Home from './components/home/home.component';
import Navigation from './components/navigation/navigation.component';
import Shop from './components/shop/shop.component';
import Login from './components/login/login.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>
    </Routes>

  )
}

export default App;
