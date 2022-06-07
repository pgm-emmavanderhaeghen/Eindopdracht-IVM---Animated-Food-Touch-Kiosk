import React from 'react'
import Button from '../Button/Button'
import styles from "./Modal.module.scss"

// import useFetch from '../../hooks/useFetch';
// import { TODO_API } from '../../constans/api';
import IngredientList from '../IngredientList/IngredientList';
import { Ingredient } from '../Ingredient/Ingredient';

const Modal = ({show, onClose, children}) => {

    // const [response] = useFetch(TODO_API);

    if (!show) {
        return null
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Pasta in 4 steps</h2>
                <IngredientList>
                    <Ingredient></Ingredient>
                </IngredientList>
                <Button onClick={onClose} color='red' className={styles.button}>Put it on the list!</Button>
            </div>
        </div>
    )
}

export default Modal