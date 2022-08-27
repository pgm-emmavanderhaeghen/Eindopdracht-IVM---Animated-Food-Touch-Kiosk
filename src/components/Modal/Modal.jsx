import React from 'react'
import Button from '../Button/Button'
import { IngredientList } from '../IngredientList/IngredientList';
import styles from "./Modal.module.scss"
import Heading from '../Heading/Heading';
import {motion} from 'framer-motion';
import { useState } from 'react';
// import { orderContext } from '../../App'
// import { useContext } from 'react';

const Modal = ({data, onClose, orderItem, setOrderItem, children}) => {

const modalVariants = {
    hidden: {
        opacity: 0,
        y: -400
    },
    visible: {
        opacity: 1,
        y: -30,
    },
    exit: {
        opacity: 0,
        y: -400,
        transition: { ease: 'easeInOut'}
    }
}   

// for context
    // const [order, setOrder] = useContext(orderContext);
    // const value = {order, setOrder};

    const [size, setSize] = useState(null);
    const [pasta, setPasta] = useState(null);
    const [sauces, setSauces] = useState([]);
    const [toppings, setToppings] = useState([]);

    const [softdrinks, setSoftdrinks] = useState([]);

    const [sides, setSides] = useState([]);
    const [saucesToGo, setSaucesToGo] = useState([]);

    const getCurrentState = (subcat) => {
        switch (subcat) {
            case 'sizes': 
            case 'pastas':
                return `${subcat.substring(0, subcat.length-1)}`;
                break;
            default:
                return subcat;
                break;
        }
    }

    const getSetter = (subcat) => {
        switch (subcat) {
            case 'sizes': 
            case 'pastas':
                return `set${subcat[0].toUpperCase()}${subcat.substring(1, subcat.length-1)}`;
                break;
            default:
                return`set${subcat[0].toUpperCase()}${subcat.substring(1)}`;
                break;
        }
    }

    const closeModal = () => {
        setOrderItem();
        onClose();
    }

    //   // Object.keys(data) => gives us ['sizes', 'pastas', 'sauces'] ~subcat~
    //   // data[subcat].map(item => ()) => gives us [small, medium, large]

    //   {data && Object.keys(data).map(subcat => (
    //    <h3>{subcat}</h3>
    //   <ul>
    //     {data[subcat].map(item => <li>{item}</li>
    //   </ul>
    //   )

    // trying to figuere out stupid context
    // <orderContext.Provider value={value}>
        //     {({order, setOrder}) => (

    return (
                        <motion.div 
                        className={styles.modal} 
                        onClick={onClose}>
                
                            <motion.div 
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={styles.modalContent} 
                            onClick={e => e.stopPropagation()}>
                            {data && typeof data === 'object' ? Object.keys(data)?.map((subcat, index) => (
                                    <div key={index}>
                                        <Heading number="3" color="red">Choose your {subcat}</Heading>
                                        <IngredientList
                                        data={data[subcat]} 
                                        subcat={subcat} 
                                        setData={parseInt(getSetter(subcat))} 
                                        currentStateData={parseInt(getCurrentState(subcat))} 
                                        orderItem={orderItem} />
                                    </div>
                            
                                )) : data?.map((item, index) => <IngredientList key={index}>{item}</IngredientList>)
                            }
                
                            <Button 
                                onClick={closeModal} 
                                color='red' 
                            >
                                Put it on my list!
                            </Button>
                
                            </motion.div>
                        </motion.div>
    );
}

        //     )}
        // </orderContext.Provider>

export default Modal