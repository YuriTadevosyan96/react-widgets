import { useContext } from 'react';
import { CurrentUrlContext } from './Router';

function Route({ path, children }) {
  const { url } = useContext(CurrentUrlContext);
  return url === path ? children : null;
}

export default Route;
