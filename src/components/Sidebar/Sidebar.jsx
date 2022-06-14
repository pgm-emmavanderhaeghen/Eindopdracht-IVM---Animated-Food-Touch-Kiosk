import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import Button from '../Button/Button'
import styles from "./Sidebar.module.scss"

const Sidebar = ({title = 'My order', children}) => {

    return (
        <div className={styles.sidebar}>
            <h2>{title}</h2>
            <h3>Take away</h3>
            <div className={styles.scrollbar}>
                {children}
            </div>
            <Link to={ROUTES.SUMMARY}>
                <Button color='red'>
                Let's order!<br/>         
                </Button>
            </Link>
        </div>
    )
}

export default Sidebar