import { useContext, useState } from 'react';
import TokenContext from './stores/TokenContext.js';

import App from './App.jsx';
import Login from './Login.jsx';

function Main() {
  const [tokens, setTokens] = useState({
    id: 1,
    access_token:
      'BQBNi5vQnpJNljZwMOSw69PQvTdbGRrTx9t8OFg7Nz0Hp5FVEyB9d6sdhKsvYJrC2y7ZgB0QJSUkGm5KG0tXwtMF62H08MaPia_6uluU9v_Nl_J3NqPxVhB0EV4aroR4RuoNZQDmmOAetxmA5VTuMZrjF7PTOzBGdusS8Y__zpATBvjra9rZ5vc5OUd_95oLDXT5AHqw-Mh0zv4fRv_vFFC26YBFAYwT9h4',
    token_type: 'Bearer',
    expires_in: 3600,
    refresh_token:
      'AQD4bHqG28DPtFIOr7iz5pzkQqqm52pdQ5VuukOl96FsRNBxEOgAr06Z1LuC4tA7EkqO3rCLxAhpXot0WueOVF7mvL3UyRp_Sj75jea8_XCI1463DEk9qGxVZLUIRobGZDI',
    scope:
      'streaming user-modify-playback-state user-library-read user-library-modify user-read-playback-state user-read-email user-read-private',
    email: 't31kmunwong@gmail.com',
  });
  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {/* {JSON.stringify(tokens.access_token)} */}
      {Object.keys(tokens).length === 0 ? (
        <Login />
      ) : (
        <>
          <App />
        </>
      )}
    </TokenContext.Provider>
  );
}

export default Main;
