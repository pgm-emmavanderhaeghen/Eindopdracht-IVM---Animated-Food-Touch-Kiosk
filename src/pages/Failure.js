import styles from "../App.module.scss";
import Heading from "../components/Heading/Heading";
import failure from "../assets/images/failure.gif"

function Failure() {
  return (
    <div className={styles.container}>      
      <div className={styles.m4}>

        <Heading number="1">Oops, something <br></br> went wrong!</Heading>

        <p>Hmm … there seems to be <br></br> a little problem, a member <br></br> of staff  will have a look soon.</p>
        <p className={styles.red}>Hang on there</p>
        
        <img className={styles.round} src={failure} alt="failure" />

      </div>
    </div>
  );
}

export default Failure;