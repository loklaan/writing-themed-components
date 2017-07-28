import React from 'react'
import { combineAsStyleSheets } from './_.util'
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

export default Button
