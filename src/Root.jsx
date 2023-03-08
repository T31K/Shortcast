import { useContext, useState, useEffect } from 'react';
import TokenContext from './stores/TokenContext.js';
import { getConfig, setConfig } from './helpers/configHelper.js';
import axios from 'axios';

import App from './components/App.jsx';
import AppTest from './components/AppTest.jsx';
import LoginTest from './components/login/LoginTest.jsx';
import Loading from './components/Loading.jsx';

function Root() {
  const [email, setEmail] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    callServer();
  }, [email]);

  const getToken = async () => {
    const config = await getConfig();
    if (config) {
      const token = JSON.parse(config);
      console.log(token);
      setEmail(token.email);
    } else {
      setIsLoading(false);
      console.log('no token found');
    }
  };

  const callServer = async () => {
    if (email) {
      console.log('callServer()');
      try {
        const res = await axios.post('https://api.docktopus.com/refresh', { email });
        if (res.status === 200) {
          await setConfig(res.data);
          setToken(res.data);
          setIsAuth(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <main className="dialog">
        {isLoading ? (
          <Loading />
        ) : isAuth ? (
          <App />
        ) : (
          <LoginTest
            titleText="hello"
            setIsAuth={setIsAuth}
            isAuth={isAuth}
          />
        )}
      </main>
    </TokenContext.Provider>
  );
}

export default Root;
