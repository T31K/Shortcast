import SpotifyWebApi from 'spotify-web-api-node';

export const newCurrentTrack = {
  name: '',
  artist: '',
  album: '',
  repeat: null,
  shuffle: null,
  state: '',
};

export const newSpotifyApi = new SpotifyWebApi();
