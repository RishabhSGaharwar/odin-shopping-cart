import React from "react";
import {data} from "../data/items"
import styles from "../css/items.module.css";
import { Item } from "../components/Item";


function Items ({addToCart, updateQty, content}){
  return(
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.sideBar}>

Experience the vibrant burst of flavor and the juicy, refreshing delight of nature's finest gifts - fruits! <br/><br/>At our store, we offer a wide array of succulent fruits that are sure to tantalize your taste buds and nourish your body. <br/>From the zesty tang of citrus fruits like oranges and lemons to the luscious sweetness of berries and melons, our fruits are handpicked at the peak of ripeness, ensuring maximum flavor and nutritional value. <br/><br/>Indulge in the natural goodness of fruits, packed with vitamins, minerals, and antioxidants that promote a healthy lifestyle. <br/>Whether you're looking to create a vibrant fruit salad, whip up a delicious smoothie, or simply enjoy a healthy snack, our selection of fresh, high-quality fruits is sure to satisfy your cravings. <br/>Don't wait any longer - come and explore our delectable fruit paradise today!
      </div>
      <div className={styles.products}>
          <div className={styles.title}>
          Choose from a variety of Fruits!
          </div>
          <div className={styles.fruitList}>
            {data && data.map((product, i) => (
                <Item key = {i} id = {product.id} name = {product.name} price = {product.price} imgUrl = {product.imgUrl} addToCart = {addToCart} updateQty = {updateQty} content = {content}/>
            ))} 
          </div>
      </div>
    </div>
    </div>
  )
}

export {Items};
