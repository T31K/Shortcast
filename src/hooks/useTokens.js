import { useContext } from 'react';
import TokenContext from '../stores/TokenContext.js';

export const useTokens = () => {
  const { tokens, setTokens } = useContext(TokenContext);
  return { tokens, setTokens };
};
