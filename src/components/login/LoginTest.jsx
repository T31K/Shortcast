import { useState } from 'react';
import { useTokens } from '../../hooks/useTokens.js';
import axios from 'axios';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=8480566ec7fe4f5d96b45004a1a99f72&response_type=code&redirect_uri=http://localhost:3001/login&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

function LoginTest({ titleText, isAuth, setIsAuth }) {
  const [email, setEmail] = useState('t31kmunwong@gmail.com');
  const [isClicked, setIsClicked] = useState(false);
  const { token, setToken } = useTokens();
  const handleClick = () => {
    setTimeout(() => setIsClicked(true), 1500);
  };

  const authUser = async () => {
    try {
      const res = await axios.post('http://localhost:3001/authorize', { email });
      if (res.status === 200) {
        setToken(res.data);
        setIsAuth(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isClicked ? (
        <div
          id="auth"
          className="h-[100vh] flex justify-center items-center"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={authUser}>authUser</button>
        </div>
      ) : (
        <div
          id="login"
          className="h-[100vh] flex justify-center items-center"
        >
          <a
            href={AUTH_URL}
            target="_blank"
            onClick={handleClick}
          >
            Login With Spotify
          </a>
        </div>
      )}
    </>
  );
}

export default LoginTest;
