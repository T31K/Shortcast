// import React, { createContext, useContext, useState } from 'react';
// import SpotifyWebApi from 'spotify-web-api-node';

// const SpotifyContext = createContext(null);

// export function SpotifyProvider({ children }) {
//   const [spotifyApi, setSpotifyApi] = useState(null);

//   const playSong = async (spotifyUri) => {
//     try {
//       await spotifyApi.play({ uris: [spotifyUri] });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleApiLoad = async () => {
//     const clientId = 'your_client_id';
//     const clientSecret = 'your_client_secret';
//     const refreshToken = 'your_refresh_token';

//     const api = new SpotifyWebApi({
//       clientId: clientId,
//       clientSecret: clientSecret,
//       refreshToken: refreshToken
//     });

//     await api.refreshAccessToken();
//     setSpotifyApi(api);
//   };

//   return (
//     <SpotifyContext.Provider value={{ spotifyApi, playSong }}>
//       {children}
//       {!spotifyApi && (
//         <button onClick={handleApiLoad}>Load Spotify API</button>
//       )}
//     </SpotifyContext.Provider>
//   );
// }

// export function useSpotify() {
//   const { spotifyApi, playSong } = useContext(SpotifyContext);
//   return { spotifyApi, playSong };
// }
