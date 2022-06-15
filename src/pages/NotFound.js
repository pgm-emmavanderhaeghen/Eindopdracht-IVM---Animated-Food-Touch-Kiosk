import styles from "../App.module.scss";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import notFound from "../assets/images/notfound.gif"

function NotFound() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">Oops!</Heading>
        <Heading number="2" color="red">The page you were <br></br> looking  for doesn't exist</Heading>

        <img className={styles.round} src={notFound} alt="order" />

        <p>Maybe the page you were looking for is moved or deleted. </p>

        <Link to="/">
          <Button color='red'>
            Go to the start page
          </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default NotFound;