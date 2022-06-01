import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "./routes.js";
import loading from "../assets/images/loading.svg"

function Payment() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>
        <h1>Almost done!</h1>
        <img src={loading} alt="order" />
        <p>Please follow the instructions displayed on the credit card terminal below</p>
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