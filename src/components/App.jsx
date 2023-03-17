import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens.js';

import SpotifyWebApi from 'spotify-web-api-node';
import { newSpotifyApi } from '../helpers/stateHelper.js';

import { registerGlobals, unregisterGlobals } from '../helpers/shortcutHelper.js';
import { appWindow } from '@tauri-apps/api/window';
import { useHotkeys } from 'react-hotkeys-hook';

import NowPlaying from './NowPlaying.jsx';
import Content from './Content.jsx';
import Search from './Search.jsx';
import Header from './Header.jsx';
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
    registerGlobals();
    return () => {
      unregisterGlobals();
    };
  }, []);

  useEffect(() => {
    spotifyApi.setAccessToken(token.access_token);
  }, [token.access_token]);

  useHotkeys(
    'esc',
    async () => {
      await appWindow.setAlwaysOnTop(false);
      await appWindow.hide();
    },
    { preventDefault: true, enableOnFormTags: ['INPUT'] }
  );

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
