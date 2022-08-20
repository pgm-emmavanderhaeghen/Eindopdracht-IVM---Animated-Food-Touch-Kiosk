import styles from "../App.module.scss";
import loading from "../assets/images/gif/order-being-prepared.gif"
import Heading from "../components/Heading/Heading";
import {motion} from 'framer-motion'

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

function Payment() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">Almost done!</Heading>

        <img className={styles.round} src={loading} alt="order" />
        <p>Please follow the instructions displayed <br></br> on the credit card terminal below</p>
        
      </div>
    </motion.div>
  );
}

export default Payment;