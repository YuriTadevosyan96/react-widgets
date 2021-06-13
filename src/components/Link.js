import React, { useContext } from 'react';
import { CurrentUrlContext } from './Router';

function Link({ href, className, children }) {
  const { setUrl } = useContext(CurrentUrlContext);
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
    setUrl(href);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;
