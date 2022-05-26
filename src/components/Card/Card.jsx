import React from 'react'
import styles from "./Card.module.scss"

const Card = ({color= '', variant= '', children}) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[color]}`}>
        {children}
    </div>
  )
}

export default Card