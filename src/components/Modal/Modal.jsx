import React, { useState } from 'react'
import { TODO_API } from '../../constants/api';
import useFetch from '../../hooks/useFetch';
import Button from '../Button/Button'
import Heading from '../Heading/Heading';
import { Ingredient } from '../Ingredient/Ingredient';
import styles from "./Modal.module.scss"
import one from "../../assets/images/1.png"
import two from "../../assets/images/2.png"
import three from "../../assets/images/3.png"
import four from "../../assets/images/4.png"
import IngredientList from '../IngredientList/IngredientList';

const Modal = ({data, onClose, children}) => {

    // const data = {
    //     sizes: ["small", "medium", "large"],
    //   pastas: ["penne","spagh"],
    //   sauces: ["bocca","bolognese"]
    //   }
    //   // Object.keys(data) => gives us ['sizes', 'pastas', 'sauces'] ~subcat~
    //   // data[subcat].map(item => ()) => gives us [small, medium, large]

    //   {data && Object.keys(data).map(subcat => (
    //    <h3>{subcat}</h3>
    //   <ul>
    //     {data[subcat].map(item => <li>{item}</li>
    //   </ul>
    //   )

    
    return (
        <div className={styles.modal} onClick={onClose}>

            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>Pasta in 4 steps</h2>

            {data && typeof data === 'object' ?
                Object.keys(data)?.map(subcat => (
                    <>
                        <h3>{subcat}</h3>
                        <IngredientList>
                            {data[subcat].map(item => 
                                <Ingredient>{item}</Ingredient>
                            )}
                        </IngredientList>
                    </>
                )) : data?.map(item => <Ingredient>{item}</Ingredient>)
            }



        <Button 
            onClick={onClose} 
            color='red' 
            className={styles.button}
        >
            Put it on the list!
        </Button>

            </div>
        
        </div>
    )
}

export default Modal