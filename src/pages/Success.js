import styles from "../App.module.scss";
import Heading from "../components/Heading/Heading";
import success from "../assets/images/success.gif"
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

function Success() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">That's a wrap!</Heading>

        <p>Everything went well and we are <br></br> making your order as we speak.</p>
        <p className={styles.green}>Enjoy your meal</p>

        <img className={styles.round} src={success} alt="success" />

      </div>
    </motion.div>
  );
}

export default Success;