import React from 'react';
import { useState } from 'react';
import styles from './IngredientItem.module.scss'
// import order from "../../assets/images/svg/boccabeker.svg";
// import { useContext } from 'react';
// import { OrderContext } from '../../App';

export const IngredientItem = ({item, subcat, updateData, id, currentStateData, orderItem, props}) => {
    const [active, setActive] = useState(true);
    // const [order, setOrder] = useContext(OrderContext);

    const buttonClicked = (selectedItem) => {
        setActive(current => !current);
        if (typeof(updateData) === 'function') {
            switch (subcat) {
                case 'sizes':
                case 'pastas':
                updateData(selectedItem);
                break;
            default:
                const items = [...currentStateData];
                    if (!items.includes(selectedItem)) {
                        items.push(selectedItem)
                    } else {
                            items.splice(items.indexOf(selectedItem),1);
                    }
                    updateData(items);
                    break;
            }
        }
    }

return (
    <li 
    key={item.key}
    data-id={item.name} 
    className={`${subcat} ${active ? styles.ingredientBtn : `active ${styles.active}`}`} 
    onClick={event => buttonClicked(item)}>
        <img src={item.image} className={styles.orderImg} alt="img" />
        <p>{item.name}</p>
        <p className={styles.price}>{item.price}</p>
    </li>
)}
