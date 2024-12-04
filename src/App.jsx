import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{ Suspense } from 'react';
import './Loader.css'; // Import the CSS file for styling the loader
import './App.css'
import {Analytics} from '@vercel/analytics/react'

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
    <p>Loading, please wait...</p>
  </div>
);


const IntroPage = React.lazy(() => import('./components/Intro'));
const Home = React.lazy(() => import('./components/Home'));
const EndPage = React.lazy(() => import('./components/EndPage'));

const App = () => {
  return (
    <Router
      // Enable both future flags
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,  // Enable relative splat path resolution
      }}
    >
      <Analytics />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
