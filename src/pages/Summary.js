import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { routes } from "./routes.js";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png"

function Summary() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>
        <h1>Summary page</h1>
        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <p>small penne bocca sauce with bacon</p>
          <p>€ 7.50</p>
        </Card>
          <Link to={routes.SELECTION}>
            <Button>
              Go back <br/>         
            </Button>
          </Link>
          <Link to={routes.PAYMENT}>
            <Button color='red'>
              Pay now <br/>         
            </Button>
          </Link>
      </div>
    </div>
  );
}

export default Summary;