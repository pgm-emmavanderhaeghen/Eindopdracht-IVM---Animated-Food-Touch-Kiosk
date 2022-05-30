import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../pages/routes'
import Button from '../Button/Button'
import styles from "./Sidebar.module.scss"

const Sidebar = ({children}) => {
  return (
    <div className={styles.sidebar}>
        <h2>My order</h2>
        <h3>Take away</h3>
        <div className={styles.scrollbar}>
            {children}
        </div>
        <Link to={routes.SUMMARY}>
            <Button color='red'>
              Let's order!<br/>         
            </Button>
        </Link>
    </div>
  )
}

export default Sidebar