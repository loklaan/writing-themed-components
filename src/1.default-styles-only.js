import React from 'react'
import { StyleSheet } from './_.util'
import { defaultStyles } from './_.styles'

/*
|-------------------------------------------------------------------------------
| Let's add our styles to a button. Business as usual.
*/

const Button = ({
  children,
  prefix,
  suffix,
}) => {
  const styles = StyleSheet(defaultStyles)
  return (
    <div className={styles.container}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}

      <span className={styles.content}>{children}</span>

      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  )
}

export default Button
