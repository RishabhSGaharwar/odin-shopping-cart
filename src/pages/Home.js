import React from "react";
import { Component } from "react";
import styles from "../css/home.module.css";
import FruitBasket from "../images/home/fruitbasket.jpg";

class Home extends Component {
  render(){
    return(
      <div className={styles.container}>
        <div className = {styles.textContent}>
        <p className={styles.title}>Fresh Fruits</p>
        <p className={styles.subtitle}>Nature's Best, Delivered Fresh to You!</p>
        <button className={styles.btn} onClick={(e) => {e.preventDefault(); window.location.href = "/items"}}>Shop Now</button>
        </div>
        <div className={styles.imageHolder}>
          <img src = {FruitBasket} alt = "Fruit Basket" className = {styles.homeImage}/>
        </div>
      </div>
    )
  }
}

export {Home};
