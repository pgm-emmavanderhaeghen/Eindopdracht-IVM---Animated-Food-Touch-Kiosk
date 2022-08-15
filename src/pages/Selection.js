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
import React, { useState } from "react";
import { BOCCA_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import Counter from "../components/Counter/Counter";
import Heading from "../components/Heading/Heading";
import logo from "../assets/images/logo.svg"

const Selection = () => {
  const { response, error, loading } = useFetch(BOCCA_API);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const handleModal = (show, category) => {
    setShowModal(show);
    setFilteredData(response[category]);
  };

  return (
    <div className={styles.flexContainer}>
      {loading && "Loading"}
      {error && error.message}
      {response && (
        <>
          <div>

            <Link to={ROUTES.START}>
              <img to={ROUTES.START} src={logo} className={styles.logo} alt="logo" />
            </Link>

            <Heading number="1">Let's eat!</Heading>

            {showModal && (
              <Modal onClose={() => setShowModal(false)} data={filteredData}></Modal>
            )}

            <Button
              onClick={() => handleModal(true, "pasta")}
              variant="long"
              color="pink"
            >
              Pasta in 4 steps
            </Button>

            <Button
              onClick={() => handleModal(true, "drinks")}
              variant="square"
            >
              Drinks
            </Button>

            <Button
              onClick={() => handleModal(true, "extras")}
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
          </div>

          <Sidebar>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>small penne ham & cheese sauce & parmesan</p>
                  <p className={styles.price}>€ 6.50</p>
                  <Counter />
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>large gluten-free marisol sauce with bacon</p>
                  <p className={styles.price}>€ 8.50</p>
                  <Counter />
                </Card>

                <Card>
                  <img src={order} className={styles.beker} alt="order" />
                  <p>medium spaghetti arrabbiata sauce & mozzarella balls</p>
                  <p className={styles.price}>€ 7.50</p>
                  <Counter />
                </Card>

          </Sidebar>
        </>
      )}
    </div>
  );
};

export default Selection;
