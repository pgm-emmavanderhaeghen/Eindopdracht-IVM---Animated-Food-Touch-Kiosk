import styles from "../App.module.scss";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";

function NotFound() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

      <Heading number="1">Oops!</Heading>
      <Heading number="2" color="red">The page you were looking for doesn't exist</Heading>
      <p>Maybe the page you were looking for is moved or deleted. </p>

        <Button color='red'>
          <Link to="/"> Go to the start page</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;