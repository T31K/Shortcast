import { useState, useEffect } from 'react';
import { useTokens } from '../hooks/useTokens';
import { useHotkeys } from 'react-hotkeys-hook';
import { appWindow } from '@tauri-apps/api/window';
import { newCurrentTrack } from '../helpers/newState.js';
import { getNowPlaying } from '../helpers/trackHelper';

function NowPlaying({ spotifyApi }) {
  const { token, setToken } = useTokens();
  const [currentTrack, setCurrentTrack] = useState(newCurrentTrack);

  useEffect(() => {
    setFocusChanged();
  }, []);

  const setFocusChanged = async () => {
    let interval;
    await appWindow.onFocusChanged(async ({ payload: focused }) => {
      if (focused) {
        interval = setInterval(async () => {
          let data = await getNowPlaying();
          if (data) {
            setCurrentTrack(data);
          }
        }, 800);
      } else {
        clearInterval(interval);
      }
    });
  };

  return (
    <div className="nowPlaying">
      <div className="widget">
        <img
          src={currentTrack.album}
          alt=""
        />
        <div className="currentTrack">
          <h4>{currentTrack.name.length > 20 ? `${currentTrack.name.slice(0, 22)}...` : currentTrack.name}</h4>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
      <div className="controls">
        <i className="ri-skip-back-fill"></i>
        <i className={`ri-${currentTrack.state === ' playing' ? 'pause' : 'play'}-circle-fill`}></i>
        <i className="ri-skip-forward-fill"></i>
      </div>
    </div>
  );
}

export default NowPlaying;

// osascript -e 'tell application "Spotify" to set currentSeconds to (player position as integer)'
