import { useContext } from 'react';
import SpotifyApiContext from '../stores/SpotifyApiContext.js';

export const useTokens = () => {
  const { spotifyApi, setSpotifyApi } = useContext(SpotifyApiContext);
  return { spotifyApi, setSpotifyApi };
};
