import { useContext, useState, useEffect } from 'react';
import { Store } from 'tauri-plugin-store-api';
import TokenContext from './stores/TokenContext.js';
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
    // let token = { email: 't31kmunwong@gmail.com' };
    if (token) {
      console.log('token found');
      setEmail(token.email);
    } else {
      setIsLoading(false);
      console.log('no token found');
    }
  };

  const callServer = async () => {
    if (email) {
      try {
        const res = await axios.post('http://localhost:3001/authorize', { email });
        if (res.status === 200) {
          setToken(res.data);
          setIsAuth(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
      console.log('callServer()');
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
