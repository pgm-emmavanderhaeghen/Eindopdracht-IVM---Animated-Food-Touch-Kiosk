import styles from "./assets/styles/App.module.scss";
import {ReactComponent as Smile} from "./assets/images/bocca-smile.svg"
import { Link } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";

function Start() {
  return (
    <div className={styles.container}>      
    <Hero />
      <div className={styles.m4}>
        <h1>Welcome at bocca</h1>
        <p>
          <strong>Bocca</strong> is a fresh, quick and delicious <strong>pastabar </strong>  
          located in Bruges & Ghent. <br/> Check out what we got on the menu.
        </p>
      </div>
        <div className={styles.m4}>
          <Button type='square' color='black'>
            <Link to="Selection">Eat here</Link> <br/>         
            <Smile/>
          </Button>
          <Button type='square' color='red'>
            <Link to="Selection">Take away</Link> <br/>         
            <Smile/>
          </Button>
        </div>
        <div>
          <Button>English</Button>
          <Button>Nederlands</Button>
          <Button>Français</Button>
          <Button>Deutsch</Button>
        </div>
    </div>
  );
}

export default Start;