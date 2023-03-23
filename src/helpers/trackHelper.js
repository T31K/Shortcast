import { Command } from '@tauri-apps/api/shell';

export const getNowPlaying = () => {
  const command = new Command('get-track', [
    '-e',
    'tell application "Spotify" to {artist of current track & ";", artwork url of current track & ";", repeating & ";", shuffling & ";", player state & ";", name of current track}',
  ]);

  return new Promise((resolve, reject) => {
    let output;
    command.stdout.on('data', async (line) => {
      const [artist, album, repeat, shuffle, state, name] = line.split(';,');
      output = {
        name,
        artist,
        album,
        repeat,
        shuffle,
        state,
      };
    });

    command.on('close', () => {
      resolve(output);
    });

    command.on('error', (err) => {
      reject(err);
    });

    command.spawn();
  });
};

export const playTrack = () => {
  const command = new Command('play', ['-e', 'tell application "Spotify" to play']);

  return new Promise((resolve, reject) => {
    command.on('close', () => {
      resolve();
    });

    command.on('error', (err) => {
      reject(err);
    });

    command.spawn();
  });
};
