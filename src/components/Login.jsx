import { useState } from 'react';
import { useTokens } from '../hooks/useTokens.js';
import { setConfig } from '../helpers/configHelper.js';
import axios from 'axios';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=8480566ec7fe4f5d96b45004a1a99f72&response_type=code&redirect_uri=https://api.docktopus.com/login&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

function LoginTest({ titleText, isAuth, setIsAuth }) {
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const { token, setToken } = useTokens();

  const nextStep = () => {
    setTimeout(() => setCurrentStep(currentStep + 1), 1500);
  };

  const authUser = async () => {
    try {
      const res = await axios.post('https://api.docktopus.com/authorize', { email });
      if (res.status === 200) {
        await setConfig(res.data);
        setToken(res.data);
        setCurrentStep(currentStep + 1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLFG = () => {
    setIsAuth(true);
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
                  href={AUTH_URL}
                  target="_blank"
                  onClick={nextStep}
                >
                  Login With Spotify
                </a>
              </div>
            );
          case 2:
            return (
              <div id="auth">
                <input
                  type="text"
                  value={email}
                  placeholder="Verify your email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={authUser}
                  className="text-white bg-[#5cbc8b] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-semibold"
                >
                  Submit
                </button>
              </div>
            );
          case 3:
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
                  onClick={handleLFG}
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

export default LoginTest;
