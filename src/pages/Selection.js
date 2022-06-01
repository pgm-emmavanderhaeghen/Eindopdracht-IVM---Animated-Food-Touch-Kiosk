import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "./routes.js";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png";
import food from "../assets/images/food.svg";
import Modal from "../components/Modal/Modal";
import React, { useState, useEffect } from "react";

// https://pgm-emmavanderhaeghen.github.io/IVM-Animated-Food-Touch-Kiosk/bocca.json

function Selection() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://pgm-emmavanderhaeghen.github.io/IVM-Animated-Food-Touch-Kiosk/bocca.json`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((e) => setError(e.message));
  }, []);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;


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

        {/* <button onClick={() => setShowModal(true)} className='button button-blue'>Open modal</button> */}
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <h4>Size</h4>
          <p>{JSON.stringify(data.pasta.sizes)}</p>
          <h4>Pasta</h4>
          <p>{JSON.stringify(data.pasta.pastas)}</p>
          <h4>Sauce</h4>
          <p>{JSON.stringify(data.pasta.sauces)}</p>
          <h4>Toppings</h4>
          <p>{JSON.stringify(data.pasta.toppings)}</p>
          <h4>Drinks</h4>
          <p>{JSON.stringify(data.drinks)}</p>
          <h4>Extra</h4>
          <p>{JSON.stringify(data.extras)}</p>
        </Modal>

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
