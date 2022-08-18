import React, { useState } from 'react'
import { useContext } from 'react';
import { OrderContext } from '../../App';
import Button from '../Button/Button'
import styles from "./Counter.module.scss"

const Counter = ({ item, defaultAmount = 1 }) => {
    const [amount, setAmount] = useState(defaultAmount);
    const [order, setOrder] = useContext(OrderContext);

    const setCartContext = (val) => {
        setAmount(val);
        setOrder({
            ...order, 
            [item.id]: {...order, amount: val}
        });
    }

    console.log(order);

    const detractAmount = () => {
        if (amount <= 1) {
            return setCartContext(0)
        }

        return setCartContext(parseInt(amount) - 1);
    }

    return (
        <div className={styles.wrapper}>
            <Button 
            onClick={detractAmount} 
            variant="small" 
            color="yellow">
                -
            </Button>
            
            <input type="number" value={amount} onChange={e => setCartContext(e.target.value)} />

            <Button 
            onClick={() => setCartContext (parseInt(amount) + 1)} 
            variant="small" 
            color="yellow">
                +
            </Button>
        </div>
    )
}

export default Counter