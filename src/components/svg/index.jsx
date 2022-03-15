/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

export default function Svg({ icon, className, ...restProps }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={icon.viewBox}
      className={classnames(styles.icon, className)}
      {...restProps}
    >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

Svg.propTypes = {
  icon: PropTypes.shape({
    viewBox: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
}

Svg.defaultProps = {
  className: '',
}
