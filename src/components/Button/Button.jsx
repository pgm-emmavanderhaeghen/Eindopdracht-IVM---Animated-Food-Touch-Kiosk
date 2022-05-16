import React from 'react'
import styles from "./Button.module.scss"

const Button = ({type = 'black', children}) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>
        {children}
    </button>
  )
}

export default Button