import React, { useState, useEffect } from 'react';

export const CurrentUrlContext = React.createContext();

function Router({ children }) {
  const [url, setUrl] = useState('/');

  useEffect(() => {
    const onUrlChange = () => {
      setUrl(window.location.pathname);
    };

    window.addEventListener('popstate', onUrlChange);

    return () => {
      window.removeEventListener('popstate', onUrlChange);
    };
  }, []);

  return (
    <CurrentUrlContext.Provider value={{ setUrl, url }}>{children}</CurrentUrlContext.Provider>
  );
}

export default Router;
