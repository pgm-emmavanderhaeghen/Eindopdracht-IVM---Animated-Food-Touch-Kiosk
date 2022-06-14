import React from 'react'
import hero from "../../assets/images/Hero-banner-text.png"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <img 
    src={hero} 
    className={styles.logo} 
    alt="logo" />
  )
}

export default Hero