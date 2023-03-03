import { BaseDirectory, createDir, exists, writeTextFile, readTextFile } from '@tauri-apps/api/fs';

const checkConfigExist = async () => {
  const fileExists = await exists('app.conf', { dir: BaseDirectory.AppData });
  return fileExists;
};

export const setConfig = async (data) => {
  await writeTextFile('app.conf', JSON.stringify(data), { dir: BaseDirectory.AppData });
};

export const getConfig = async () => {
  const contents = await readTextFile('app.conf', { dir: BaseDirectory.AppData });
  return contents;
};
