import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const LinkButton = props => {
  const { active, anchor, text } = props;
  return (
    <li>
      <AnchorLink href={`#${anchor}`} className={`anchor-link ${active ? 'active-background' : 'inactive-background'}`}>
        {text}
      </AnchorLink>
    </li>
  );
}

export default LinkButton;