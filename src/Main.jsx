import { useContext, useState } from 'react';
import TokenContext from './stores/TokenContext.js';

import App from './App.jsx';
import Login from './Login.jsx';

function Main() {
  const [tokens, setTokens] = useState({
    id: 1,
    access_token:
      'BQDTZevrcx85hPgY3A2VC6Nabk0vCzQGmYIBlLqUHoZnNbfSyJHEnuCheFTL3Mhw3NMNAw3pPSHqT_gnCMUic_dGhrNX6eK_73BxrQuX_scOm4ym6c2x5E6yARe6_jzrez1bLCxPFDltW81hNd4BFzOGUJ-_D5vSOPmAgr5syf0oTq9i1M6Fss3Ob4me6seWUD18MzQ1Ut0Jx7qn7B3xLL8PticjQhlbNTo","token_type":"Bearer","expires_in":3600,"refresh_token":"AQDTOGAetsg5wDsybNIqeYPx1shnjZflYewbL6V6Silu8VCIdo-SefOCtMZJ9gxnSyY8aMOb_T9hsDap-KuE6cH3GV_s_jMm00GbW2-yqnc0EW2TISbwoizPc3PnwDYLn4A',
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
