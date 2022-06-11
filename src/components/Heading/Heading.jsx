import React from 'react'
import styles from "./Heading.module.scss"

const Heading = ({color= '', variant= '', children}) => {
    return (
        <h2 className={`${styles[variant]} ${styles[color]}`}>
            {children}
        </h2>
    )
}

export default Heading