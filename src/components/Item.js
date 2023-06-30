import React from "react";
import styles from "../css/item.module.css";


function Item(props){
    const name = props.name;
    const imgUrl = props.imgUrl;
    const price = props.price; 
    const id = props.id;
    const targetItem = props.content.filter((item)=>
        item.key.id === id
    );
    const qty = (targetItem.length!==0)?targetItem[0].qty:0;
    const format = (amount) => {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        });
    
        return formatter.format(amount);
      };
    function renderQty(qty){
        if(qty < 0){
            qty = 0; 
        }
        if(qty === 0){
            return <button className={styles.add} onClick={() => props.addToCart({id:id, name:name, price:price, imgUrl:imgUrl})}>Add to Cart</button>
        }
        else{
            return(
                <div className={styles.incart}>
                <div className={styles.row1}>
                    <button className={styles.qtybtn} onClick={() => props.updateQty(id, qty-1)}>-</button>
                    <div className={styles.cartStatus}>{qty} kg in Cart</div>
                    <button className={styles.qtybtn} onClick={() => props.updateQty(id, qty+1)}>+</button>
                </div>
                <div className={styles.remove}>
                <button className={styles.row2} onClick={() => props.updateQty(id, 0)}>Remove</button>
                </div>
                </div>
            )
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.fruitImage}>
                <img src={imgUrl} className={styles.cardImage} alt = {name}/>
            </div>
            <div className={styles.cardName}>{name}</div>
            <div className={styles.row3}>
            <div className={styles.cardPrice}>{format(price)}/kg</div>
            </div>
            <div className={styles.cart}>
                {renderQty(qty)}                    
            </div>
        </div>
    );
}

export {Item};