import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { motion } from 'framer-motion';

// components
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import Card from "../components/Card/Card";

// styling
import styles from "../App.module.scss";

// animation
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

        {/* Heading component */}
        <Heading number="1">Is this what you ordered?</Heading>

        <Card variant="long" color="grey">
          <p>small penne ham & cheese parmesan</p>
          <p className={styles.price}>€6.50</p>
        </Card>

        <Card variant="long" color="grey">
          <p>large gluten-free bocca parmesan</p>
          <p className={styles.price}>€8.50</p>
        </Card>

        {/* Heading component */}
        <Heading number="2">Your total is<span className={styles.price}> € 15</span> </Heading>

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