import React from 'react'
import { motion } from 'framer-motion';
import styles from "./Button.module.scss"

const Button = ({color= '', variant= '', children, onClick}) => {
    return (
        <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={(onClick)} 
            className={`${styles.btn} ${styles[variant]} ${styles[color]}`}>
            {children}
        </motion.button>
    )
}

export default Button