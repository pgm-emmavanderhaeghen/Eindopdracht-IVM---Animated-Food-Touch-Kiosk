import React from 'react'
import styles from './Ingredient.module.scss'
import order from "../../assets/images/Boccabeker-p-500.png";

export const Ingredient = ({children}) => {
    return (
    <li className={styles.ingredientBtn}>
        <img src={order} className={styles.orderImg} alt="order" />
        <p>{children}</p>
    </li>
    )}
