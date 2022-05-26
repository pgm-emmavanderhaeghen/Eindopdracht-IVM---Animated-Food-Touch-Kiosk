import React from 'react'
import styles from "./Modal.module.scss"

const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h4>Dialog</h4>
                <p>Are you sure you want to delete the item?</p>
                <button onClick={props.onClose} className={styles.button}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal