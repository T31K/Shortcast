import { useState, useEffect } from 'react';
import { useTokens } from './hooks/useTokens.js';
import { debounce } from './helpers/searchHelpers.js';
import SpotifyWebApi from 'spotify-web-api-node';

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const { tokens, setTokens } = useTokens();
  const [currentTrack, setCurrentTrack] = useState({
    name: '',
    artist: '',
    image: '',
  });

  let spotifyApi;
  useEffect(() => {
    spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(tokens.access_token);
    getCurrentTrack();
  }, []);

  const getCurrentTrack = async () => {
    try {
      const data = await spotifyApi.getMyCurrentPlayingTrack();
      let { item } = data?.body;
      let name = item?.name;
      let artist = item?.artists[0]?.name;
      let image = item?.album?.images[1]?.url;
      setCurrentTrack({ name, artist, image });
    } catch (error) {
      console.error('Error getting current track:', error);
      return null;
    }
  };

  const debouncedSearch = debounce(async (searchValue) => {
    try {
      if (spotifyApi) {
        const data = await spotifyApi.searchTracks(searchValue);
        let { items } = data?.body?.tracks;
        console.log(items);
        setItems(items);
      }
    } catch (err) {
      console.error(err);
    }
  }, 500);

  const handleOnChange = (e) => {
    const { value } = e.target;

    if (value === '') {
      debouncedSearch.cancel();
      setItems([]);
    } else {
      debouncedSearch(value);
    }
  };

  return (
    // <main>
    //   <section
    //     className="p-5 "
    //     id="nowPlaying"
    //   >
    //     <div className="flex align-center justify-between">
    //       <div>
    //         <img
    //           src={currentTrack.image}
    //           className="rounded-xl w-[130px] h-[130px] ml-3"
    //           alt=""
    //         />
    //       </div>
    //       <div className="w-[300px] flex justify-center items-center flex-col">
    //         <div>
    //           <h1 className="px-5 text-gray-900 text-lg text-center font-bold">{currentTrack.name} </h1>
    //           <h4 className="px-5 text-gray-800 text-sm text-center font-medium p-0">{currentTrack.artist}</h4>
    //         </div>
    //         <div className="flex items-center">
    //           <i className="ri-skip-back-fill"></i>
    //           <i className="ri-play-circle-fill"></i>
    //           {/* <i className="ri-pause-circle-fill"></i> */}
    //           <i className="ri-skip-forward-fill"></i>
    //         </div>
    //         <div className="progress-container">
    //           <div className="progress-bar"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="p-5 ">
    //     <div className="flex items-center">
    //       <div className="relative w-full">
    //         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //           <svg
    //             aria-hidden="true"
    //             className="w-5 h-5 text-gray-500 dark:text-gray-400"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </div>
    //         <input
    //           onChange={(e) => handleOnChange(e)}
    //           type="text"
    //           id="simple-search"
    //           autoCorrect="off"
    //           className="bg-gray-50 mx-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="Search"
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   <section className="px-5 ">
    //     <div className="p-3 items-container">
    //       {items.map((item, key) => {
    //         return (
    //           <div
    //             className="item"
    //             key={key}
    //           >
    //             <div className="flex items-center">
    //               <img
    //                 src={item?.album?.images[0]?.url}
    //                 alt=""
    //               />
    //               <div>
    //                 <h2 className="font-medium">{item.name}</h2>
    //                 <p>{item?.artists[0]?.name}</p>
    //               </div>
    //             </div>
    //             <div className="justify-end">
    //               <kbd className="px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
    //                 Shift
    //               </kbd>

    //               <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
    //                 {key + 1}
    //               </kbd>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </section>
    // </main>
    <main></main>
  );
}

export default App;
