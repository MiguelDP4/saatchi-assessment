import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { PropTypes } from 'prop-types';

const LinkButton = props => {
  const {
    active, anchor, text, changeTab,
  } = props;
  return (
    <li>
      <AnchorLink
        href={`#${anchor}`}
        className={`anchor-link ${active ? 'active-background' : 'inactive-background'}`}
        onClick={() => changeTab(anchor)}
      >
        {text}
      </AnchorLink>
    </li>
  );
};

LinkButton.propTypes = {
  active: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default LinkButton;
