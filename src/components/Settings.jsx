import { useState } from 'react';
import { tabs } from '../helpers/tabHelper.js';

function Settings({ setShowSettings }) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="settingsWrapper">
      <i
        class="ri-close-circle-line"
        id="close-btn"
        onClick={() => setShowSettings(false)}
      ></i>
      <div className="settings-nav">
        {tabs.map((tab, key) => {
          return (
            <i
              className={`${tab.className} ${key === currentTab ? 'active' : null}`}
              onClick={() => setCurrentTab(key)}
            ></i>
          );
        })}
      </div>
      <div className="settings-content">
        {(() => {
          switch (currentTab) {
            case 0:
              return (
                <section className="home">
                  <div className="font-semibold text-lg mb-5">Harmonize</div>
                  <div class="my-2">
                    <span className="title">License</span>
                    <span className="value">Free</span>
                  </div>
                  <button>Upgrade Premium</button>
                </section>
              );
            case 1:
              return (
                <section className="update">
                  <div className="font-semibold text-lg mb-5">Updates</div>
                  <div class="my-2">
                    <span className="title">Version</span>
                    <span className="value">0.1.1</span>
                  </div>
                  <button>Check for updates</button>
                </section>
              );
            case 2:
              return (
                <section className="update">
                  <div className="font-semibold text-lg mb-5">Shortcuts (Coming Soon)</div>
                </section>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default Settings;
