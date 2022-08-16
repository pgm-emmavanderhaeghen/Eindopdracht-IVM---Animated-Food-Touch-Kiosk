import React from 'react'
import Button from '../Button/Button'
import { Ingredient } from '../Ingredient/Ingredient';
import styles from "./Modal.module.scss"
import Heading from '../Heading/Heading';
// import {motion} from 'framer-motion';


const Modal = ({data, onClose, children}) => {

    //   // Object.keys(data) => gives us ['sizes', 'pastas', 'sauces'] ~subcat~
    //   // data[subcat].map(item => ()) => gives us [small, medium, large]

    //   {data && Object.keys(data).map(subcat => (
    //    <h3>{subcat}</h3>
    //   <ul>
    //     {data[subcat].map(item => <li>{item}</li>
    //   </ul>
    //   )

    return (
        <div 
        className={styles.modal} 
        onClick={onClose}>

            <div 
            className={styles.modalContent} 
            onClick={e => e.stopPropagation()}>
            {data && typeof data === 'object' ?
                Object.keys(data)?.map(subcat => (
                    <>
                        <Heading number="3" color="red">{subcat}</Heading>
                        <ul className={styles.list}>
                            {data[subcat].map(item => 
                                <li className={styles.ingredientBtn}>
                                    <img src={item.image} className={styles.orderImg} alt="img" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </li>
                            )}
                        </ul>
                    </>
                )) : data?.map(item => <Ingredient>{item}</Ingredient>)
            }

            <Button 
                onClick={onClose} 
                color='red' 
                className={styles.button}
            >
                Put it on my list!
            </Button>

            </div>
        
        </div>
    )
}

export default Modal