import React from 'react'
import Button from '../Button/Button'
import { Ingredient } from '../Ingredient/Ingredient';
import styles from "./Modal.module.scss"
import Heading from '../Heading/Heading';
import {motion} from 'framer-motion';
import { useState } from 'react';
import { OrderContext } from '../../App';
import { useContext } from 'react';

const Modal = ({data, onClose, children}) => {

const modalVariants = {
    hidden: {
        opacity: 0,
        y: -400
    },
    visible: {
        opacity: 1,
        y: -30,
    },
    exit: {
        opacity: 0,
        y: -400,
        transition: { ease: 'easeInOut'}
    }
}

    //   // Object.keys(data) => gives us ['sizes', 'pastas', 'sauces'] ~subcat~
    //   // data[subcat].map(item => ()) => gives us [small, medium, large]

    //   {data && Object.keys(data).map(subcat => (
    //    <h3>{subcat}</h3>
    //   <ul>
    //     {data[subcat].map(item => <li>{item}</li>
    //   </ul>
    //   )

    const [active, setActive] = useState(true);
    const [order, setOrder] = useContext(OrderContext);

    let tempOrder = [];

    const buttonClicked = (event, name, price) => {
        
        setActive(current => !current);

        tempOrder.push({
            name,
            price
        })
        
        setOrder(
            tempOrder
        )
        
        console.log(tempOrder);

    }

    return (
        <motion.div 
        className={styles.modal} 
        onClick={onClose}>

            <motion.div 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.modalContent} 
            onClick={e => e.stopPropagation()}>
            {data && typeof data === 'object' ?
                Object.keys(data)?.map(subcat => (
                    <>
                        <Heading number="3" color="red">Choose your {subcat}</Heading>
                        <ul className={styles.list}>
                            {data[subcat].map(item => 
                                <li className={active ? styles.ingredientBtn : styles.active} onClick={event => buttonClicked(event, item.name, item.price)}>
                                    <img src={item.image} className={styles.orderImg} alt="img" />
                                    <p>{item.name}</p>
                                    <p className={styles.price}>{item.price}</p>
                                </li>
                            )}
                        </ul>
                    </>
                )) : data?.map(item => <Ingredient>{item}</Ingredient>)
            }

            <Button 
                onClick={onClose} 
                color='red' 
            >
                Put it on my list!
            </Button>

            </motion.div>
        </motion.div>
    )
}

export default Modal