// src/SpotifyEmbed.js
import React from 'react';
import './SpotifyEmbed.css';

const SpotifyEmbed = ({ src }) => {
  return (
    <div className="spotify-widget">
      <iframe
        src={src}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
