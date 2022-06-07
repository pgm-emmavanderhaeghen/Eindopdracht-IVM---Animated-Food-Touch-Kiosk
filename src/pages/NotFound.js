import styles from "../App.module.scss";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>
        <h1>We are sorry, but the page you were looking for doesn't exist</h1>
        <Button color='red'>
          <Link to="/"> Go to the start page</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;