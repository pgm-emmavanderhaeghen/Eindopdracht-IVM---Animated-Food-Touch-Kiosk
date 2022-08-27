import React from 'react'
import Counter from '../Counter/Counter';
import order from "../../assets/images/svg/boccabeker.svg";
import styles from "./Card.module.scss"

const Card = ({color= '', variant= '', children}) => {
    return (
        <div className={`${styles.card} ${styles[variant]} ${styles[color]}`}>
            <img src={order} className={styles.beker} alt="order" />
            {children}
            <Counter/>
        </div>
    )
}

export default Card