import { appWindow } from '@tauri-apps/api/window';
import { register } from '@tauri-apps/api/hotkey';

export async function registerGlobals() {
  await register('CommandOrControl+Shift+L', async () => {
    await appWindow.setAlwaysOnTop(true);
    await appWindow.setFocus();
    await appWindow.show();
  });

  await register('Esc', async () => {
    await appWindow.setAlwaysOnTop(false);
    await appWindow.hide();
  });
}
