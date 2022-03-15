/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'

export default function Input({ name, onChange, ...props }) {
  return (
    <div>
      <input name={name} onChange={onChange} {...props} />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
