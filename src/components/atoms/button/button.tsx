import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as styles from './button.scss';

export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success'
};

const Button = ({ text = '', type = 'primary' }) => {
  const buttonClassName = classnames(styles.button, 'button', type);
  return (
    <button type="button" className={buttonClassName}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
