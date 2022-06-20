import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    // <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    // </React.Suspense>
  );
}

export default App;
