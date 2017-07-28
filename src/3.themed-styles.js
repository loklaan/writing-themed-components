import React from 'react'
import { combineAsStyleSheets, assignDefaults } from './_.util'
import { defaultStyles } from './_.styles'

const Button = ({
  children,
  prefix,
  suffix,
  userStyles,
}) => {
  const styles = combineAsStyleSheets(defaultStyles, userStyles)
  return (
    <div className={styles.container}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}

      <span className={styles.content}>{children}</span>

      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  )
}

const defaultTheme = {
  PRIMARY: 'black',
  SECONDARY: 'white',
  SPACING: '8px',
  BORDER: '1px',
  RADIUS: '3px',
  TEXT: {
    fontFamily: '"Proxima Nova", sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '12px'
  }
}
const ThemedButton = ({userTheme, ...props}) => {
  const theme = assignDefaults(userTheme, defaultTheme)
  const themeStyles = {
    container: {
      background: theme.SECONDARY,
      border: `solid ${theme.BORDER} ${theme.PRIMARY}`,
      boxShadow: `1px 1px 0px ${theme.PRIMARY}`,
      borderRadius: theme.RADIUS,
      padding: theme.SPACING,
      '&:hover': {
        boxShadow: `3px 3px 0px ${theme.PRIMARY}`,
      }
    },
    prefix: {
      marginRight: theme.SPACING,
    },
    content: {
      color: theme.PRIMARY,
      ...theme.TEXT
    },
    suffix: {
      marginLeft: theme.SPACING,
    },
  }
  return <Button {...props} userStyles={themeStyles} />
}

export default ThemedButton
