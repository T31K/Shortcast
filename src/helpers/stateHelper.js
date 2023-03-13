import SpotifyWebApi from 'spotify-web-api-node';

export const newCurrentTrack = {
  name: 'Never Gonna Give You Up',
  artist: 'Rick Astley',
  album: 'https://upload.wikimedia.org/wikipedia/en/3/34/RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg',
  repeat: null,
  shuffle: null,
  state: '',
};

export const newSpotifyApi = new SpotifyWebApi();
