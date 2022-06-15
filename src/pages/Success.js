import styles from "../App.module.scss";
import Heading from "../components/Heading/Heading";
import success from "../assets/images/success.gif"

function Success() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">That's a wrap!</Heading>

        <p>Everything went well and we are <br></br> making your order as we speak.</p>
        <p className={styles.green}>Enjoy your meal</p>

        <img className={styles.round} src={success} alt="success" />

      </div>
    </div>
  );
}

export default Success;