import React from "react";
import { Component } from "react";
import styles from "../css/home.module.css";
import FruitBasket from "../images/home/fruitbasket.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render(){
    return(
      <div className={styles.container}>
        <div className = {styles.textContent}>
        <p className={styles.title}>Fresh Fruits</p>
        <p className={styles.subtitle}>Nature's Best, Delivered Fresh to You!</p>
        <Link to={"/items"}><button className={styles.btn}>Shop Now</button></Link>
        </div>
        <div className={styles.imageHolder}>
          <img src = {FruitBasket} alt = "Fruit Basket" className = {styles.homeImage} loading="lazy"/>
        </div>
      </div>
    )
  }
}

export {Home};
