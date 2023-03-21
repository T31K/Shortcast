import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process';
import { useEffect, useState } from 'react';

function Update() {
  const [isLoading, setIsLoading] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateText, setUpdateText] = useState('');

  useEffect(() => {
    setUpdateText('Check for updates');
  }, []);

  const handleCheck = async () => {
    try {
      setIsLoading(true);
      const { shouldUpdate } = await checkUpdate();

      if (shouldUpdate) {
        setIsLoading(false);
        setUpdateAvailable(true);
      } else {
        // to do future
        setIsLoading(false);
        setUpdateText('No updates');
      }
    } catch (error) {
      if (error.includes('parsing')) {
        setIsLoading(false);
        setUpdateText('No updates');
      }
    }
  };

  const handleInstall = async () => {
    try {
      await installUpdate();
      await relaunch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="update">
      <div className="font-semibold text-lg mb-5">Updates</div>
      <div className="my-2">
        <span className="title">Version</span>
        <span className="value">1.0.10</span>
      </div>
      {!updateAvailable ? (
        <button onClick={handleCheck}>
          {updateText}
          {isLoading && <span className="updateLoader"></span>}
        </button>
      ) : (
        <button onClick={handleInstall}>Install updates</button>
      )}
    </section>
  );
}

export default Update;
