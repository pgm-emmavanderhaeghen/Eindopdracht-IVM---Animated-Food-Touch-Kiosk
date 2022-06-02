import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../constans/routes";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png";
import food from "../assets/images/food.svg";
import Modal from "../components/Modal/Modal";
import React, { useState } from "react";
import { TODO_API } from "../constans/api";
import useFetch from "../hooks/useFetch";

function Selection() {
  const [showModal, setShowModal] = useState(false);
  // const [orders, setOrders] = useState([]);

  const [response, error, loading] = useFetch(TODO_API);

  return (
    <div className={styles.flexContainer}>
      <div>
        <Link to={ROUTES.START}>
          <Button>
            Go back to start
            <br />
          </Button>
        </Link>

        <h1>Hungry?</h1>

        {response && (
          <Modal onClose={() => setShowModal(false)} show={showModal}>
            <h4>Size</h4>
            <p>{JSON.stringify(response.pasta.sizes)}</p>
            <h4>Pasta</h4>
            <p>{JSON.stringify(response.pasta.pastas)}</p>
            <h4>Sauce</h4>
            <p>{JSON.stringify(response.pasta.sauces)}</p>
            <h4>Toppings</h4>
            <p>{JSON.stringify(response.pasta.toppings)}</p>
          </Modal>
        )}

        <Button onClick={() => setShowModal(true)} variant="long" color="pink">
          Pasta in 4 steps
        </Button>

        {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
        </Modal> */}

        <Button onClick={() => setShowModal(true)} variant="square">
          Drinks
        </Button>

        {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
        </Modal> */}

        <Button onClick={() => setShowModal(true)} variant="square">
          Extra
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
        <Card>
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
        <Card>
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
        <Card>
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
      </Sidebar>
    </div>
  );
}

export default Selection;
