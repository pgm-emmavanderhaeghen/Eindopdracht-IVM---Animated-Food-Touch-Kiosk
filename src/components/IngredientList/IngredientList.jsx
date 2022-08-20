import React from 'react'
import { IngredientItem } from '../IngredientItem/IngredientItem'
import styles from './IngredientList.module.scss'


export const IngredientList = ({data, subcat, setData, currentStateData, orderItem, props}) => {
    return (
        <ul className={styles.list}>
            {data.map((item, index) => 
                <IngredientItem item={item} key={`${subcat}${index}`} subcat={subcat} updateData={setData} currentStateData={currentStateData} orderItem={orderItem} />
            )}
        </ul>
    )
}