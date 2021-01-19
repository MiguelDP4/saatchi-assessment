import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const LinkButton = props => {
  const { active, anchor, text, changeTab } = props;
  return (
    <li>
      <AnchorLink href={`#${anchor}`} 
      className={`anchor-link ${active ? 'active-background' : 'inactive-background'}`}
      onClick={() => changeTab(anchor)}>
        {text}
      </AnchorLink>
    </li>
  );
}

export default LinkButton;