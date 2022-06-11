import React from 'react'
import Button from '../Button/Button'
import styles from "./Modal.module.scss"

import useFetch from '../../hooks/useFetch';
import { TODO_API } from '../../constants/api';
import IngredientList from '../IngredientList/IngredientList';
import { Ingredient } from '../Ingredient/Ingredient';

const Modal = ({data, onClose, children}) => {
    console.log(data)
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Pasta in 4 steps</h2>
                {JSON.stringify(data)}
                <Button onClick={onClose} color='red' className={styles.button}>Put it on the list!</Button>
            </div>
        </div>
    )
}

export default Modal