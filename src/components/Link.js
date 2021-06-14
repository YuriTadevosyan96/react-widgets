import React, { useContext } from 'react';
import { CurrentUrlContext } from './Router';

function Link({ href, className, children }) {
  const { setUrl } = useContext(CurrentUrlContext);

  const onClick = (event) => {
    // this part is meant to imitate native behaviour inside browser
    // when ctrl key was pressed when clicking a link
    // metaKey is for Mac
    if (event.metaKey || event.ctrlKey) {
      return;
    }

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
