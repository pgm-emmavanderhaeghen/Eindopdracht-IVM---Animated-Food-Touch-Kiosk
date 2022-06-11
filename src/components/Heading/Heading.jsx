import React from 'react'
import styles from "./Heading.module.scss"

const Heading = ({number, color = '', variant = '', children}) => {
    const HeadingTag = `h${number}`;
    return (
        <HeadingTag className={`${styles[variant] ?? ''} ${styles[color] ?? ''}`}>
            {children}
        </HeadingTag>
    )
}

export default Heading