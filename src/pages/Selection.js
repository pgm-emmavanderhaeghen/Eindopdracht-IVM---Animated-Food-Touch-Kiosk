import styles from "../App.module.scss";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { routes } from "./routes.js";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import order from "../assets/images/Boccabeker-p-500.png"

function Selection() {
  return (
    <div className={styles.flexContainer}>      
      <div>
      <Link to={routes.START}>
            <Button>
              Go back to start<br/>         
            </Button>
          </Link>
        <h1>Hungry?</h1>
            <Button variant="long" color="pink">
              Pasta in 4 steps        
            </Button>
            <Button variant="square">
              Drinks        
            </Button>
            <Button variant="square">
              Extra        
            </Button>
          <h1>Our specials</h1>
          <Button variant="square">
              Bocca Love       
            </Button>
            <Button variant="square">
              Maria Soul      
            </Button>
            <Button variant="square">
              Pesto Basta       
            </Button>
            <Button variant="square">
              Say Cheese        
            </Button>
      </div>
      <Sidebar>
        <h2>My order</h2>
        <h3>Take away</h3>
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
        <Link to={routes.SUMMARY}>
            <Button color='red'>
              Let's order!<br/>         
            </Button>
          </Link>
      </Sidebar>
    </div>
  );
}

export default Selection;