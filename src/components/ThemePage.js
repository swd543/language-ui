import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const ThemePage = ({ text }) => {
  return (
    <div>
      <Typography
        variant="h1"
        style={{
          padding: 10,
        }}
      >
        Clap {text}
      </Typography>
    </div>
  )
}

ThemePage.propTypes = {
  text: PropTypes.string,
}

export default ThemePage
