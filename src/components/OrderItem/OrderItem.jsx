import React from 'react'
import styles from './OrderItem.module.scss'
import order from "../../assets/images/svg/boccabeker.svg";

export const OrderItem = ({data, children}) => {
    return (
    <li className={styles.ingredientBtn}>
        <img src={order} className={styles.orderImg} alt="order" />
        <p>{children}</p>
    </li>
    )}