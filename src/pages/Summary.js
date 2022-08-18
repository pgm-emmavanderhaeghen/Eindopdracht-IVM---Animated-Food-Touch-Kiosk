import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../constants/routes";
import Card from "../components/Card/Card";
import order from "../assets/images/boccabeker.svg"
import Heading from "../components/Heading/Heading";
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -200
  },
  visible: {
    opacity: 1,
    y: -10,
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: { ease: 'easeInOut'}
  }
}

function Summary() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}>      
      <div className={styles.m4}>

      <Heading number="1">Is this what you ordered?</Heading>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <ul>
            <li>small penne</li>
            <li>ham & cheese sauce</li>
            <li>& parmesan</li>
          </ul>
          <p className={styles.price}>€ 6.50</p>
        </Card>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <ul>
            <li>large gluten-free</li>
            <li>marisol sauce</li>
            <li>with bacon</li>
          </ul>
          <p className={styles.price}>€ 8.50</p>
        </Card>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <ul>
            <li>medium spaghetti</li>
            <li>arrabbiata sauce</li>
            <li>& mozzarella balls</li>
          </ul>
          <p className={styles.price}>€ 7.50</p>
        </Card>

        <Heading number="2">Your total is<span className={styles.price}> € 47</span> </Heading>

          <Link to={ROUTES.SELECTION}>
            <Button>
              Wait! Take me back <br/>         
            </Button>
          </Link>

          <Link to={ROUTES.PAYMENT}>
            <Button color='red'>
              Okay great! I'll pay now <br/>         
            </Button>
          </Link>
          
      </div>
    </motion.div>
  );
}

export default Summary;