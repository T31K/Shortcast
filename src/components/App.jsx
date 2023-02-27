import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens.js';
import SpotifyWebApi from 'spotify-web-api-node';

import { register } from '@tauri-apps/api/globalShortcut';
import { appWindow } from '@tauri-apps/api/window';

import Command from './Command.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [spotifyApi, setSpotifyApi] = useState(null);
  const { token, setToken } = useTokens();

  useEffect(() => {
    registerKey();
  }, []);

  useEffect(() => {
    const api = new SpotifyWebApi();
    api.setAccessToken(token.access_token);
    setSpotifyApi(api);
  }, [token.access_token]);

  async function registerKey() {
    await register('CommandOrControl+Shift+L', async () => {
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
      if (event.key === 'Tab') {
        setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
      }
      if (event.key === 'Enter' || event.key === 'Return') {
        console.log(items);
      }
    });
  }

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        items={items}
        setItems={setItems}
        spotifyApi={spotifyApi}
      />
      <Command
        items={items}
        activeIndex={activeIndex}
      />
      <Footer />
    </>
  );
}

export default App;
