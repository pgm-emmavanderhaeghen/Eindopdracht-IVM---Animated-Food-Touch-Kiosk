import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import styles from "./Sidebar.module.scss"

const Sidebar = ({title = 'My order', children}) => {

    return (
        <div className={styles.sidebar}>

            <Heading number="2">{title}</Heading>
            <Heading number="3">Take away</Heading>

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