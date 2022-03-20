/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

export default function Input({
  name,
  label,
  id,
  onChange,
  className,
  placeholder,
  ...props
}) {
  return (
    <div className={styles['input-container']}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={classnames(styles['input-wrapper'], className)}>
        <input
          id={id}
          className={styles.input}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

Input.defaultProps = {
  className: '',
  placeholder: '',
}
