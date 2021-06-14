/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
