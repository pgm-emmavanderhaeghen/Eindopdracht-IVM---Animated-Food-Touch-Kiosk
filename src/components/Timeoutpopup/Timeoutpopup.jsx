import styles from "./Timeoutpopup.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import React from "react";
import {motion, AnimatePresence} from 'framer-motion'
import Heading from "../Heading/Heading";
import { ROUTES } from "../../constants/routes";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const Popup = ({ showPopup, setShowPopup }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            { showPopup && (
                <motion.div 
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={styles.popup}>

                    <motion.div 
                    className={styles.popupContent}>
                        <Heading number="2">Are you still there?</Heading>
                        <p>You have been gone for a while... are you still hungry?</p>
                        <Link to={ROUTES.START}>
                            <Button>Go back to Start</Button>
                        </Link>
                        <Link to={ROUTES.SELECTION}>
                            <Button color="red">Continue my order</Button>
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Popup;