import { BaseDirectory, createDir, exists, writeTextFile, readTextFile } from '@tauri-apps/api/fs';

const checkConfig = async () => {
  const fileExists = await exists('app.conf', { dir: BaseDirectory.AppData });
  if (!fileExists) {
    await writeTextFile(`${BaseDirectory.AppData}/com.shortcast/app.conf`, '');
  }
};

export const setConfig = async (data) => {
  await writeTextFile('app.conf', JSON.stringify(data), { dir: BaseDirectory.AppData });
};

export const getConfig = async () => {
  // await checkConfig();
  const contents = await readTextFile('app.conf', { dir: BaseDirectory.AppData });
  return contents;
};
