import React from 'react'
import styles from "./Card.module.scss"
import Counter from '../Counter/Counter';

const Card = ({item, color= '', variant= '', children}) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[color]}`}>
        {children}
        <Counter item={item}/>
    </div>
  )
}

export default Card