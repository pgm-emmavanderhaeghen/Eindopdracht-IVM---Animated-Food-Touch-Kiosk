import React from 'react'
import Button from '../Button/Button'
import styles from "./Modal.module.scss"

import order from "../../assets/images/Boccabeker-p-500.png";
import useFetch from '../../hooks/useFetch';
import { TODO_API } from '../../constans/api';

const Modal = ({show, onClose, children}) => {

    const [response] = useFetch(TODO_API);

    if (!show) {
        return null
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Pasta in 4 steps</h2>
                <h4>Size</h4>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        small
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        medium
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        large
                    </Button>
                <h4>Pasta</h4>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        penne
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        spaghetti
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        fusilli
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        gluten-free
                    </Button>
                <h4>Sauce</h4>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        bocca
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        bolognese
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        cheese <br></br> & ham
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        veggie
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        marisol
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        4 cheeses
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        currysauce
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        arrabbiata
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        green pesto
                    </Button>
                    <Button variant="small">
                        <img src={order} className={styles.orderImg} alt="order" />
                        red pesto
                    </Button>
                <h4>Toppings</h4>
                <p>{JSON.stringify(response.pasta.toppings)}</p>

                <button onClick={onClose} className={styles.button}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal