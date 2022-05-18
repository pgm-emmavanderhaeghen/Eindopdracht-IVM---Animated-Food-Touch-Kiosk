import React from 'react'
import styles from "./Button.module.scss"

const Button = ({color= '', type= '', children}) => {
  return (
    <button className={`${styles.btn} ${styles[type]} ${styles[color]}`}>
        {children}
    </button>
  )
}

export default Button