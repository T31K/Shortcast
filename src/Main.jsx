import { useContext, useState } from 'react';
import TokenContext from './stores/TokenContext.js';

import App from './App.jsx';
import Login from './Login.jsx';

function Main() {
  const [tokens, setTokens] = useState({
    id: 1,
    access_token:
      'BQDt6BX6oxSwLPeW4NSr_0rdRUCAEm4IwN3QgbMyJRe1-yu11-8v0O2i8rtxGffxiUSL40Ug5iNlxFzShEZzVoNp3_vsP_xg-kfbJgFQpAn_kUBkFNIUltiNnH0rEFLnsHp4tkVcnn-Dv705DKtMma3ybrFY8CgV81L1if58Zb1fqbsnpUk02UpJTC5IUHzleSxUc08Yg9SSIs_PcjnhZbHeowHQ8-_q4Ig',
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
      {/* {JSON.stringify(tokens)} */}
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
