import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from "./Counter.module.scss"
// import { useContext } from 'react';
// import { orderContext } from '../../App'

const Counter = ({ defaultAmount = 1 }) => {
    const [amount, setAmount] = useState(defaultAmount);
    // const [order, setOrder] = useContext(orderContext);

    const setCartContext = (val) => {
        setAmount(val);
        // setOrder({
        //     ...order, 
        //     [item.id]: {...order, amount: val}
        // });
    }

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