import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../constants/routes";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png"
import Heading from "../components/Heading/Heading";

function Summary() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

      <Heading number="1">Is this what you ordered?</Heading>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <strong>1x</strong> 
          <ul>
            <li>small penne</li>
            <li>ham & cheese sauce</li>
            <li>& parmesan</li>
          </ul>
          <p className={styles.price}>€ 6.50</p>
        </Card>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <strong>3x</strong> 
          <ul>
            <li>large gluten-free</li>
            <li>marisol sauce</li>
            <li>with bacon</li>
          </ul>
          <p className={styles.price}>€ 8.50</p>
        </Card>

        <Card variant="long" color="grey">
          <img src={order} className={styles.beker} alt="order" />
          <strong>2x</strong> 
          <ul>
            <li>medium spaghetti</li>
            <li>arrabbiata sauce</li>
            <li>& mozzarella balls</li>
          </ul>
          <p className={styles.price}>€ 7.50</p>
        </Card>

          <Link to={ROUTES.SELECTION}>
            <Button>
              Wait! Take me back <br/>         
            </Button>
          </Link>

          <Link to={ROUTES.PAYMENT}>
            <Button color='red'>
              Okay great! I'll pay now <br/>         
            </Button>
          </Link>
          
      </div>
    </div>
  );
}

export default Summary;