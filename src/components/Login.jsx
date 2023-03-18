import { useState } from 'react';
import { useTokens } from '../hooks/useTokens.js';

import { setConfig } from '../helpers/configHelper.js';
import { getHash } from '../helpers/hashHelper.js';

import { WebviewWindow } from '@tauri-apps/api/window';
import { authUrl } from '../helpers/URLHelper.js';

import axios from 'axios';

function Login({ isAuth, setIsAuth }) {
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const { token, setToken } = useTokens();

  const nextStep = async () => {
    setTimeout(() => setCurrentStep(currentStep + 1), 1500);
    const hash = await getHash();
    const webview = new WebviewWindow('loginPage', { title: 'Login Spotify', url: `${authUrl}${hash}` });
  };

  const authUser = async () => {
    const hash = await getHash();
    try {
      const res = await axios.post('https://api.docktopus.com/authorize', { hash });
      if (res.status === 200) {
        await setConfig(res.data);
        setToken(res.data);
        setIsAuth(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {(() => {
        switch (currentStep) {
          case 1:
            return (
              <div
                id="login"
                className="h-[100vh] flex justify-center items-center"
              >
                <a
                  target="_blank"
                  onClick={nextStep}
                >
                  Login With Spotify
                </a>
              </div>
            );
          case 2:
            return (
              <div id="onboard">
                <p className="text-xl font-semibold mb-4">To launch Harmonize:</p>
                <div className="kbd-controls">
                  <kbd>⌘</kbd>
                  <kbd>⇧</kbd>
                  <kbd>space</kbd>
                </div>
                <button
                  className="lfg"
                  onClick={authUser}
                >
                  Let's go
                </button>
              </div>
            );
        }
      })()}
    </>
  );
}

export default Login;
