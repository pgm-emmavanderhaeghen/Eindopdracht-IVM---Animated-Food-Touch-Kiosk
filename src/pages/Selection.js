import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../constants/routes";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png";
import food from "../assets/images/food.svg";
import Modal from "../components/Modal/Modal";
import React, { useState } from "react";
import { TODO_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import Counter from "../components/Counter/Counter";

const Selection = () => {
  const { response, error, loading } = useFetch(TODO_API);
  const [showModal, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  // const [orders, setOrders] = useState([]);

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
              <Button>
                Go back to start
                <br />
              </Button>
            </Link>

            <h1>Hungry?</h1>

            {showModal && (
              <Modal onClose={() => setShowModal(false)} data={filteredData}>
                <p>fghj</p>
              </Modal>
            )}

            <Button
              onClick={() => handleModal(true, "pasta")}
              variant="long"
              color="pink"
            >
              Pasta in 4 steps
            </Button>

            {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
</Modal> */}

            <Button
              onClick={() => handleModal(true, "drinks")}
              variant="square"
            >
              Drinks
            </Button>

            {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
</Modal> */}

            <Button
              onClick={() => handleModal(true, "extras")}
              variant="square"
            >
              Extras
            </Button>

            <h1>Our specials</h1>
            <Button variant="square" color="transparent">
              <img src={food} className={styles.food} alt="order" />
              <p>Bocca Love</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={food} className={styles.food} alt="order" />
              <p>Maria Soul</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={food} className={styles.food} alt="order" />
              <p>Pesto Basta</p>
            </Button>

            <Button variant="square" color="transparent">
              <img src={food} className={styles.food} alt="order" />
              <p>Say Cheese</p>
            </Button>
          </div>

          <Sidebar>
            {/* {order.length &&
  order.map((o) => (
    <Card>
      <img src={order} className={styles.beker} alt="order" />
      <p>small penne bocca sauce with bacon</p>
      <p>€ 7.50</p>
    </Card>
  ))} */}

            {/* {
    count > 0 && 
  } */}
            <Card>
              <img src={order} className={styles.beker} alt="order" />
              <p>small penne bocca sauce with bacon</p>
              <p>€ 7.50</p>
              <Counter />
            </Card>
            <Card>
              <img src={order} className={styles.beker} alt="order" />
              <p>small penne bocca sauce with bacon</p>
              <p>€ 7.50</p>
              <Counter />
            </Card>
            <Card>
              <img src={order} className={styles.beker} alt="order" />
              <p>small penne bocca sauce with bacon</p>
              <p>€ 7.50</p>
              <Counter />
            </Card>
            <Card>
              <img src={order} className={styles.beker} alt="order" />
              <p>small penne bocca sauce with bacon</p>
              <p>€ 7.50</p>
              <Counter />
            </Card>
          </Sidebar>
        </>
      )}
    </div>
  );
};

export default Selection;
