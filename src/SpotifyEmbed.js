import React from 'react';
import './SpotifyEmbed.css';  // CSS dosyasını içe aktarma

const SpotifyEmbed = () => {
  return (
    <div className="spotify-widget">
      <iframe
        src="https://open.spotify.com/embed/playlist/1MIGItlmNGfBvcpp62O3a1?si=66aee4146c4d4e1c"
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"  // title özelliği eklendi
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
