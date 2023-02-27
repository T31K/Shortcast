import { useContext } from 'react';
import TokenContext from '../stores/TokenContext.js';

export const useTokens = () => {
  const { token, setToken } = useContext(TokenContext);
  return { token, setToken };
};
