import React from 'react'
import { Ingredient } from '../Ingredient/Ingredient'
import styles from './IngredientList.module.scss'


const IngredientList = ({children}) => {
    return (
      <ul className={styles.list}>
          <Ingredient></Ingredient>
      </ul>
    )
  }
  

export default IngredientList