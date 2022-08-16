import React from 'react'
import styles from "./Button.module.scss"
import { motion } from 'framer-motion';

const Button = ({color= '', variant= '', children, onClick}) => {
    return (
        <motion.button 
            animate={{ }}
            onClick={(onClick)} 
            className={`${styles.btn} ${styles[variant]} ${styles[color]}`}
        >
            {children}
        </motion.button>
    )
}

export default Button