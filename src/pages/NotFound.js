import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

// components
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";

// styling
import styles from "../App.module.scss";

// gif
import notFound from "../assets/images/gif/notfound.gif"

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

function NotFound() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}>   

      <div className={styles.m4}>

        <Heading number="1">Oops!</Heading>
        <Heading number="2" color="red">The page you were <br></br> looking  for doesn't exist</Heading>
        <img className={styles.round} src={notFound} alt="order" />
        <p>Maybe the page you were looking for is moved or deleted. </p>
        <Link to="/">
          <Button color='red'>Go to the start page</Button>
        </Link>
        
      </div>
    </motion.div>
  );
}

export default NotFound;