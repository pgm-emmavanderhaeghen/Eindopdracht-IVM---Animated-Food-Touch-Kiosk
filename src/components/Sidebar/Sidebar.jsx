import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Counter from '../Counter/Counter'
import styles from "./Sidebar.module.scss"
import order from "../assets/images/Boccabeker-p-500.png";


const Sidebar = ({title = 'My order', children}) => {
    const [count, setCount] = useState();
    const countChange = (value) => (
        setCount(value)
    )

    return (
        <div className={styles.sidebar}>
            <h2>{title}</h2>
            <h3>Take away</h3>
            <div className={styles.scrollbar}>
            {count > 0 ?
              <>
                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne bocca sauce without bacon & parmesan</p>
                  <p>€ 7.50</p>
                  <Counter />
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>large gluten-free marisol & pesto sauce with bacon</p>
                  <p>€ 8.50</p>
                  <Counter />
                </Card>
              </>
              :
              <></>
            }
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