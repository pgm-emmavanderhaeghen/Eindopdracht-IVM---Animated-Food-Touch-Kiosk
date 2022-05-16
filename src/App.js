import styles from "./assets/styles/App.module.scss";
import hero from "./assets/images/Hero-banner-text.png"
import {ReactComponent as Smile} from "./assets/images/bocca-smile.svg"
import Button from "./components/Button/Button";
function App() {
  return (
    <div className={styles.container}>
        <img src={hero} className={styles.logo} alt="logo" />
        <h1>Welcome at bocca</h1>
        <p>
          <strong>Bocca</strong> is a fresh, quick and delicious <strong>pastabar </strong>  
          located in Bruges & Ghent. Check out what we got on the menu.
        </p>
        <div className={styles.start}>
          <button className={`${styles.btn} ${styles.btnBlack}`}>Eat here <br/>         
            <Smile/>
          </button>
          <Button>Take away <br/>         
            <Smile/>
          </Button>
        </div>
        <br/>
        <button>English</button>
        <button>Nederlands</button>
        <button>Français</button>
        <button>Deutsch</button>
    </div>
  );
}

export default App;