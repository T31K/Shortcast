import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens.js';

import { newSpotifyApi } from '../helpers/stateHelper.js';

import NowPlaying from './NowPlaying.jsx';
import Content from './Content.jsx';
import Search from './Search.jsx';
import Settings from './Settings.jsx';
import Footer from './Footer.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [search, setSearch] = useState('');
  const [currentTrack, setCurrentTrack] = useState({});
  const [spotifyApi, setSpotifyApi] = useState(newSpotifyApi);
  const { token, setToken } = useTokens();

  useEffect(() => {
    spotifyApi.setAccessToken(token.access_token);
  }, [token.access_token]);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        setActiveIndex={setActiveIndex}
        items={items}
        setItems={setItems}
        spotifyApi={spotifyApi}
        setShowSettings={setShowSettings}
      />
      <div className="commandWrapper">
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        <NowPlaying
          currentTrack={currentTrack}
          spotifyApi={spotifyApi}
        />
        <Content
          items={items}
          setActiveIndex={setActiveIndex}
          setCurrentTrack={setCurrentTrack}
          activeIndex={activeIndex}
          spotifyApi={spotifyApi}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
