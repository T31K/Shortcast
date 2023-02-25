import { useContext, useState } from 'react';
import TokenContext from './stores/TokenContext.js';
import App from './App.jsx';
import Login from './Login.jsx';

function Main() {
  const [tokens, setTokens] = useState({
    id: 1,
    access_token:
      'BQD3WIlP-8DRLX1x3TAAdISHcymP_mowdGe1zws5mtyzSSi5Ac2nhpCrIIQXUY0TkKb93_FlhhrfsY35-m380fGleeWtCyUlyKB3avDtgfELc2oVQFQnvJ0AWcdLiEdonANwXncWViU0Jc0KdHIMT4Qx4ITwnDcZucor6ZCPhBgy3Gd9yDcxDGMlCaAOLU5CkA6ZtScjADEekC3psIirsqa6h816DgOBL48',
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
      <main className="dialog">{Object.keys(tokens).length !== 0 ? <Login /> : <App />}</main>
    </TokenContext.Provider>
  );
}

export default Main;
