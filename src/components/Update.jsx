import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
import { relaunch } from '@tauri-apps/api/process';

function Update() {
  const handleClick = async () => {
    try {
      const { shouldUpdate, manifest } = await checkUpdate();
      if (shouldUpdate) {
        await installUpdate();
        await relaunch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="update">
      <div className="font-semibold text-lg mb-5">Updates</div>
      <div className="my-2">
        <span className="title">Version</span>
        <span className="value">1.0.2</span>
      </div>
      <button onClick={handleClick}>Check for updates</button>
    </section>
  );
}

export default Update;
