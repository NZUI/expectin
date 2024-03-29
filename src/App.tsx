import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';

function App() {
  return (
    // <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    // </React.Suspense>
  );
}

export default App;
