import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

import loading from "../assets/images/order-being-prepared.gif"
import { ROUTES } from "../constants/routes";
import Heading from "../components/Heading/Heading";

function Payment() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">Almost done!</Heading>

        <img className={styles.round} src={loading} alt="order" />
        <p>Please follow the instructions displayed <br></br> on the credit card terminal below</p>

        <Link to={ROUTES.SUMMARY}>
            <Button>
              Go back <br/>         
            </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default Payment;