import styles from "../App.module.scss";
import {ReactComponent as Smile} from "../assets/images/bocca-smile.svg"
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Button from "../components/Button/Button"
import { ROUTES } from "../constants/routes";
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

function Start() {
  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.container}
    >  

    <Hero />

      <motion.div className={styles.m4}
      animate= {{ marginTop: 20 }}
      transition={{ delay: 1 }}
      >

        <Heading number="1">Welcome at bocca</Heading>
        <p className={styles.text} >
          Bocca is a fresh, quick and delicious <motion.strong animate={{color: '#DF2027'}} transition={{ delay: 1 }}> pastabar </motion.strong>  
          located in Bruges & Ghent. Check out what we got on the menu.
        </p>

        <motion.p animate={{
          fontSize: '2.5rem', 
          color:'#DF2027', 
          marginTop: '2rem',
          fontWeight: 700}}>
          Hungry?
        </motion.p>
      
      </motion.div>

      <div className={styles.m4}>

        <Link to={ROUTES.SELECTION}>
          <Button 
            variant='square' 
            color='black'
          >
            Eat here <br/>         
            <Smile/>
          </Button>
        </Link>

        <Link to={ROUTES.SELECTION}>
          <Button 
            variant='square' 
            color='red'
          >
            Take away <br/>   
            <Smile/>
          </Button>
        </Link>   
              
      </div>
    </motion.div>
  );
}

export default Start;