import React from 'react'
import { StyleSheet } from './_.util'
import { defaultStyles } from './_.styles'

/*
|-------------------------------------------------------------------------------
| We have a button. We have styles.
*/

const Button = ({ children }) => {
  const styles = StyleSheet(defaultStyles)
  return (
    <div className={styles.container}>
      <span className={styles.content}>{children}</span>
    </div>
  )
}

export default Button
