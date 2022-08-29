import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { BOCCA_API } from "../constants/api";
import { motion } from 'framer-motion';
import { useIdleTimer } from "react-idle-timer";

// components
import Button from "../components/Button/Button";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import Heading from "../components/Heading/Heading";
import Modal from "../components/Modal/Modal";
import { OrderItem } from "../components/OrderItem/OrderItem";

// styling
import styles from "../App.module.scss";

// images
import logo from "../assets/images/svg/logo.svg";
import bocca from "../assets/images/bocca-love.png";
import maria from "../assets/images/maria-soul.png";
import pesto from "../assets/images/pesto-basta.png";
import cheese from "../assets/images/say-cheese.png";

const Selection = ({ setShowPopup }) => {
  // The timer when user is being Idle + popup
  // documentation: https://idletimer.dev/docs/api/use-idle-timer
  const onIdle = () => {
    setShowPopup(true);
  }
  const onActive = (event) => {}
  // eslint-disable-next-line no-unused-vars
  const idleTimer = useIdleTimer({onIdle, onActive, timeout: 30000})

  // useFetch for importing the API data
  const { response, error, loading } = useFetch(BOCCA_API);

  // useState for showing the modal + filteredData
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  // this is old code for a timeout without idle
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true);
  //   }, 30000)
  // }, [setShowPopup])

  // Tried to animate the svg logo in the top, but couldn't get it to work.
  // const svgVariants = {
  //   hidden: { rotate: -180 },
  //   visible: {
  //     rotate: 0,
  //     transition: { duration: 1}
  //   }
  // }

  // useState for showing the orderItems in the Sidebar component
  const [orderItem, setOrderItem] = useState({
    size: "small",
    pasta: "penne",
    sauces: "bocca",
    toppings: "emmental"
  });

  const addOrderItem = () => {
    setOrderItem({})
  };

  const handleModal = (show, category) => {
    setOrderItem({  
      size: {},
      pasta: {},
      sauces: [],
      toppings: [],
      softdrinks: [],
      sides: [],
      saucesToGo: [],
    });
    setShowModal(show);
    setFilteredData(response[category]);
    // category is defined in the Button component onClick function below
  };

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
              // Modal component
              <Modal 
              onClose={() => {
                addOrderItem();
                setShowModal(false)}
              } 
              data={filteredData}
              orderItem={orderItem}
              setOrderItem={setOrderItem}
              >
              </Modal>
          )}

          <motion.div 
          initial= {{y: -230}}
          animate={{ y: 10}}>

            <Link to={ROUTES.START}>
              <img to={ROUTES.START} src={logo} className={styles.logo} alt="logo" />
            </Link>

            {/* Heading component */}
            <Heading number="1">Let's eat!</Heading>

            {/* Button components */}  
            <Button
              onClick={() => handleModal(true, "Pasta in 4 steps")}
              variant="long"
              color="pink">
              Pasta in 4 steps
            </Button>

            <Button
              onClick={() => handleModal(true, "Drinks")}
              variant="square">
              Drinks
            </Button>

            <Button
              onClick={() => handleModal(true, "Extras")}
              variant="square">
              Sides
            </Button>

            {/* Heading component */}
            <Heading number="1">Our specials</Heading>

            {/* Button components */} 
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

          {/* Sidebar component */}
          <Sidebar>
            {OrderItem!==undefined ? 
              <div>
                <Card>
                  <p>{`${orderItem.size} ${orderItem.pasta} ${orderItem.sauces} ${orderItem.toppings}`}</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>
              </div> : <p>undefined</p>
            } 

              <Card>
                <p>small penne ham & cheese parmesan</p>
                <p className={styles.price}>€ 6.50</p>
              </Card>
          </Sidebar>
        </>
      )}
    </motion.div>
  );
};

export default Selection;
