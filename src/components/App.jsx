import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens.js';
import SpotifyWebApi from 'spotify-web-api-node';
import { newSpotifyApi } from '../helpers/newState.js';

import { register } from '@tauri-apps/api/globalShortcut';
import { appWindow } from '@tauri-apps/api/window';

import NowPlaying from './NowPlaying.jsx';
import Content from './Content.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [currentTrack, setCurrentTrack] = useState({});
  const [spotifyApi, setSpotifyApi] = useState(newSpotifyApi);
  const { token, setToken } = useTokens();

  useEffect(() => {
    registerGlobals();
  }, []);

  useEffect(() => {
    spotifyApi.setAccessToken(token.access_token);
  }, [token.access_token]);

  async function registerGlobals() {
    await register('CommandOrControl+Shift+;', async () => {
      await appWindow.setAlwaysOnTop(true);
      await appWindow.setFocus();
      await appWindow.show();
    });
    document.addEventListener('keydown', async (event) => {
      if (event.key === 'Escape') {
        console.log('Escape key pressed');
        await appWindow.setAlwaysOnTop(false);
        await appWindow.hide();
      }
    });
    await appWindow.onFocusChanged(async ({ payload: focused }) => {
      if (!focused) {
        await appWindow.setAlwaysOnTop(false);
        await appWindow.hide();
      }
    });
  }

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        setActiveIndex={setActiveIndex}
        items={items}
        setItems={setItems}
        spotifyApi={spotifyApi}
      />
      <div className="commandWrapper">
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
