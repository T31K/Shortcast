import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens';
import { useHotkeys } from 'react-hotkeys-hook';
import { appWindow } from '@tauri-apps/api/window';
import { newCurrentTrack } from '../helpers/newState.js';

function NowPlaying({ spotifyApi }) {
  const { token, setToken } = useTokens();
  const [currentTrack, setCurrentTrack] = useState(newCurrentTrack);
  useEffect(() => {
    setFocusChanged();
  }, []);

  const setFocusChanged = async () => {
    await appWindow.onFocusChanged(async ({ payload: focused }) => {
      if (focused) {
        getCurrentTrack();
      }
    });
  };

  const getCurrentTrack = async () => {
    try {
      const res = await spotifyApi?.getMyCurrentPlayingTrack();
      if (res?.body?.item) {
        const { name, artists, album } = res.body.item;
        const artist = artists[0]?.name;
        const albumCover = album.images[1]?.url;
        setCurrentTrack({
          name: name,
          artist: artist,
          albumCover: albumCover,
        });
      }
    } catch (error) {
      console.log('Error getting current track:', error);
    }
  };

  return (
    <div className="nowPlaying">
      <div className="widget">
        <img
          src={currentTrack.albumCover}
          alt=""
        />
        <div className="currentTrack">
          <h4>{currentTrack.name.length > 20 ? `${currentTrack.name.slice(0, 22)}...` : currentTrack.name}</h4>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
      <div className="controls">
        <i className="ri-skip-back-fill"></i>
        <i className="ri-play-circle-fill"></i>
        <i className="ri-skip-forward-fill"></i>
      </div>
    </div>
  );
}

export default NowPlaying;

// osascript -e 'tell application "Spotify" to set currentSeconds to (player position as integer)'
