// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countdown from './Countdown';
import MainPage from './MainPage';
import PathToHeart from './PathToHeart';
import Navbar from './Navbar';
import SpotifyEmbed from './SpotifyEmbed';

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#7986cb'); // Sayaç sırasında arka plan rengi

  useEffect(() => {
    if (showMainPage) {
      setBackgroundColor('#b2dfdb'); // Sayaç bittikten sonra arka plan rengi
    }
  }, [showMainPage]);

  const handleCountdownComplete = () => {
    setShowMainPage(true);
  };

  const CLIENT_ID = "7bef6089726c407da4688e84999e1f25";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const targetDate = new Date('2024-06-12T12:37:00');

  return (
    <div style={{ backgroundColor, minHeight: '100vh', height: '100%' }}>
      <Router>
        <div>
          
          
          {showMainPage ? (
            <>
              <Navbar />
              <SpotifyEmbed src="https://open.spotify.com/embed/playlist/1MIGItlmNGfBvcpp62O3a1?si=66aee4146c4d4e1c" />
              <Routes>
                <Route path="/path-to-heart" element={<PathToHeart />} />
                <Route path="/" element={<MainPage />} />
              </Routes>
            </>
          ) : (
            <Countdown targetDate={targetDate} onComplete={handleCountdownComplete} />
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
