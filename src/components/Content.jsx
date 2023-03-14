import { useEffect, useState, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useTokens } from '../hooks/useTokens.js';
import { playTrack } from '../helpers/trackHelper.js';

function Content({ items, activeIndex, setActiveIndex, spotifyApi, setCurrentTrack }) {
  const { token, setToken } = useTokens();
  const [page, setPage] = useState(0);
  const contentRef = useRef(null);

  const playSong = async () => {
    let { uri } = items[activeIndex];
    try {
      await spotifyApi.play({ uris: [uri] });
    } catch (err) {
      if (err?.message.includes('NO_ACTIVE_DEVICE')) {
        playTrack();
      } else {
        console.log(err);
      }
    }
  };

  const addToQueue = async () => {
    let { uri } = items[activeIndex];
    try {
      const data = await spotifyApi.addToQueue(uri);
      console.log('Added song to queue:', data);
    } catch (err) {
      console.log('Error adding song to queue:', err);
    }
  };

  useHotkeys(
    'tab',
    () => {
      setActiveIndex((prevActiveIndex) => (prevActiveIndex < 20 ? prevActiveIndex + 1 : 20));
    },
    { preventDefault: true, enableOnFormTags: ['INPUT'] }
  );

  useHotkeys(
    'shift+tab',
    () => {
      setActiveIndex((prevActiveIndex) => (prevActiveIndex > 0 ? prevActiveIndex - 1 : 0));
    },
    { preventDefault: true, enableOnFormTags: ['INPUT'] }
  );

  useHotkeys(
    'enter',
    () => {
      playSong();
    },
    { preventDefault: true, enableOnFormTags: ['INPUT'] }
  );

  useHotkeys(
    'shift+enter',
    () => {
      addToQueue();
    },
    { preventDefault: true, enableOnFormTags: ['INPUT'] }
  );

  useEffect(() => {
    const el = contentRef.current;
    const activePage = Math.ceil((activeIndex + 1) / 6) - 1;

    el.scrollTo({
      top: activePage * 300,
      behavior: 'smooth',
    });
  }, [activeIndex]);

  return (
    <>
      <div
        className="content"
        ref={contentRef}
      >
        {items.map((item, key) => {
          return (
            <div
              className={activeIndex !== key ? 'option' : 'option active'}
              key={key}

              // onClick={() => playSong(item)}
            >
              <div className="left">
                <img
                  src={item?.album?.images[0]?.url}
                  className="rounded-sm w-[30px] h-[30px] mr-3"
                  alt=""
                />
                <div>
                  <h4>{item.name.length > 36 ? item.name.substring(0, 35) + '...' : item.name}</h4>
                  <p>{item?.artists[0]?.name}</p>
                </div>
              </div>
              <div className="shortcuts"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
