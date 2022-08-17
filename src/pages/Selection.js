import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../constants/routes";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png";
import bocca from "../assets/images/bocca-love.png";
import maria from "../assets/images/maria-soul.png";
import pesto from "../assets/images/pesto-basta.png";
import cheese from "../assets/images/say-cheese.png";
import Modal from "../components/Modal/Modal";
import React, { useEffect, useState } from "react";
import { BOCCA_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading/Heading";
import logo from "../assets/images/logo.svg"
import {motion} from 'framer-motion'

const Selection = ({ setShowPopup }) => {

  const { response, error, loading } = useFetch(BOCCA_API);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 30000)
  }, [setShowPopup])

  const handleModal = (show, category) => {
    setShowModal(show);
    setFilteredData(response[category]);
  };
  // category is defined in the Button component onClick function below

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
              <p>Bocca Love</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={maria} className={styles.food} alt="order" />
              <p>Maria Soul</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={pesto} className={styles.food} alt="order" />
              <p>Pesto Basta</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={cheese} className={styles.food} alt="order" />
              <p>Say Cheese</p>
            </Button>
          </motion.div>

          <Sidebar>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne ham & cheese sauce & parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne ham & cheese sauce & parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                </Card>

          </Sidebar>
        </>
      )}
    </motion.div>
  );
};

export default Selection;
