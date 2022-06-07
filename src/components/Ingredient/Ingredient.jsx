import React from 'react'
import styles from './Ingredient.module.scss'
import order from "../../assets/images/Boccabeker-p-500.png";

export const Ingredient = () => {
    return (
        <div className={styles.list}>
            <h4>Pick your size</h4>
            <ul>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>small</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>medium</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>large</p>
                </li>
            </ul>
            <h4>Choose your pasta</h4>
            <ul>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>penne</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>spaghetti</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>fusilli</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>gluten-free</p>
                </li>
            </ul>
            <h4>Decide your sauce (or mix 2/3 togheter)</h4>
            <ul>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>bocca</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>bolognese</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>cheese <br></br> & ham</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>veggie</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>marisol</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>4 cheeses</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>currysauce</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>arrabbiata</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>green pesto</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>red pesto</p>
                </li>
            </ul>
            <h4>Give your pasta some toppings</h4>
            <ul>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>emmental</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>parmesan</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>grated <br></br> mozzarella</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>raspadura</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>feta</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>bacon</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>ham</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>salmon</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>tuna</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>extra sauce</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>sun dried <br></br> tomatoes</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>mozzarella <br></br> balls</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>pine nuts</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>rocket salad</p>
                </li>
                <li className={styles.ingredientBtn}>
                    <img src={order} className={styles.orderImg} alt="order" />
                    <p>olives</p>
                </li>
            </ul>
        </div>
    )
}
