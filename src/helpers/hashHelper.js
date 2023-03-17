import { BaseDirectory, writeTextFile, readTextFile } from '@tauri-apps/api/fs';
import { SHA256 } from 'crypto-js';

export const setHash = async (data) => {
  const hasHashFile = await hasHash();
  if (!hasHashFile) {
    const message = Math.floor(Math.random() * 10000).toString();
    const hash = SHA256(message).toString();
    console.log(hash);
    await writeTextFile('hash.conf', hash, { dir: BaseDirectory.AppData });
  }
};

export const getHash = async () => {
  const hash = await readTextFile('hash.conf', { dir: BaseDirectory.AppData });
  return hash;
};

async function hasHash() {
  try {
    const contents = await readTextFile('hash.conf', { dir: BaseDirectory.AppData });
    return contents.trim().length > 0;
  } catch (error) {
    console.error('Failed to read hash.conf:', error);
    return false;
  }
}
