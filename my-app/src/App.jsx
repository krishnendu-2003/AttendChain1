import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinPage from './components/JoinPage';


function App() {
  return (
    <Router>
      <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1205276835/vector/empty-classroom-interior-school-or-college-class.jpg?s=612x612&w=0&k=20&c=K9fFk7oxhT4ztcaPI0hrhDxajR_6dzyMwUsSi0jP1Lg=)' }}
    >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/join" element={<JoinPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
