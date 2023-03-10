import { register, unregister } from '@tauri-apps/api/globalShortcut';
import { appWindow } from '@tauri-apps/api/window';

export const registerGlobals = async () => {
  await register('CommandOrControl+Shift+Space', async () => {
    await appWindow.setAlwaysOnTop(true);
    await appWindow.setFocus();
    await appWindow.show();
  });

  await appWindow.onFocusChanged(async ({ payload: focused }) => {
    if (!focused) {
      await appWindow.setAlwaysOnTop(false);
      await appWindow.hide();
    }
  });
};

export const unregisterGlobals = async () => {
  await unregister('CommandOrControl+Shift+Space');
};
