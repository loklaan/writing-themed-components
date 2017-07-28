import React from 'react'
import { combineAsStyleSheets } from './_.util'
import { defaultStyles } from './_.styles'

/*
|-------------------------------------------------------------------------------
| Along with adding styles to a button, let's make them overridable with user
| styles.
|
| This becomes the underlying system we'll use for "Theming".
*/

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

export default Button
