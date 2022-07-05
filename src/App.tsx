import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Signup from './pages/signup';

function App() {
  return (
    // <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    // </React.Suspense>
  );
}

export default App;
