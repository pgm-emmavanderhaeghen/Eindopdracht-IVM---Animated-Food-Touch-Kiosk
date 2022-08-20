import styles from "../App.module.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import Heading from "../components/Heading/Heading";
import Modal from "../components/Modal/Modal";
import { BOCCA_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import {motion} from 'framer-motion';
import { useIdleTimer } from "react-idle-timer";

// images
import logo from "../assets/images/logo.svg";
import order from "../assets/images/boccabeker.svg";
import bocca from "../assets/images/bocca-love.png";
import maria from "../assets/images/maria-soul.png";
import pesto from "../assets/images/pesto-basta.png";
import cheese from "../assets/images/say-cheese.png";

const Selection = ({ setShowPopup }) => {

  const { response, error, loading } = useFetch(BOCCA_API);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  // this is old code for a timeout without idle
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true);
  //   }, 30000)
  // }, [setShowPopup])

  const handleModal = (show, category) => {
    setShowModal(show);
    setFilteredData(response[category]);
  };
  // category is defined in the Button component onClick function below

  // documentation: https://idletimer.dev/docs/api/use-idle-timer
  const onIdle = () => {
    setShowPopup(true);
  }
  const onActive = (event) => {}
  const idleTimer = useIdleTimer({onIdle, onActive, timeout: 30000})

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

  // Tried to animate the svg logo in the top, but didn't work.
  // const svgVariants = {
  //   hidden: { rotate: -180 },
  //   visible: {
  //     rotate: 0,
  //     transition: { duration: 1}
  //   }
  // }

  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.flexContainer}>
      {loading && "Loading"}
      {error && error.message}
      {response && (
        <>
          {showModal && (
              <Modal 
              onClose={() => setShowModal(false)} 
              data={filteredData}></Modal>
          )}

          <motion.div 
          initial= {{y: -230}}
          animate={{ y: 10}}
          >

            <Link to={ROUTES.START}>
              <img to={ROUTES.START} src={logo} className={styles.logo} alt="logo" />
            </Link>

            <Heading number="1">Let's eat!</Heading>

            <Button
              onClick={() => handleModal(true, "Pasta in 4 steps")}
              variant="long"
              color="pink"
            >
              Pasta in 4 steps
            </Button>

            <Button
              onClick={() => handleModal(true, "Drinks")}
              variant="square"
            >
              Drinks
            </Button>

            <Button
              onClick={() => handleModal(true, "Extras")}
              variant="square"
            >
              Extras
            </Button>

            <Heading number="1">Our specials</Heading>
            
            <Button variant="square" color="transparent">
              <img src={bocca} className={styles.food} alt="order" />
              <p>medium spaghetti <br/>
                bocca with bacon<br/>
                parmesan</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={maria} className={styles.food} alt="order" />
              <p>medium penne <br/>
                marisol<br/>
                parmesan</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={pesto} className={styles.food} alt="order" />
              <p>medium spaghetti <br/>
                pesto<br/>
                parmesan</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={cheese} className={styles.food} alt="order" />
              <p>medium gluten-free <br/>
                ham & cheese<br/>
                parmesan</p>
            </Button>
          </motion.div>

          <Sidebar>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne <br/>
                    ham & cheese<br/>
                    parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne <br/>
                    ham & cheese<br/>
                    parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne <br/>
                    ham & cheese<br/>
                    parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>

          </Sidebar>
        </>
      )}
    </motion.div>
  );
};

export default Selection;
