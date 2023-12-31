import React, { useState } from "react";
// import { data } from "../data/items";
import { CartItem } from "./cartItem";
import styles from "../css/cart.module.css";
import Close from "../images/home/close.png"
// import {OffCanvas} from "react-bootstrap";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Cart(props){
    const format = (amount) => {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        });
    
        return formatter.format(amount);
    };
    if(!props.cartStatus){
        return null;
    }
    return ReactDOM.createPortal(
        <><div className={styles.cartPage}>
        <div className={styles.backdrop} onClick={props.hideCart}></div>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                Your<br/>Shopping<br/> Cart
                </div>
                <button className={styles.closeBtn} onClick={props.hideCart}>
                    <img src = {Close} alt = "Close" className={styles.close} onClick={() => props.hideCart()} loading="lazy"/>
                </button>
            </div>
            <div className={styles.content}>
                {
                    props.content && props.content.map((product) => {
                        // setAmount(amount => amount + (product.qty*product.key.price))
                        return <CartItem key = {product.key.id} imgUrl = {product.key.imgUrl} quantity = {product.qty} name = {product.key.name} price = {product.key.price}/>
                    }
                    )
                }
            </div>
            {props.content.length!==0?
                (
                    <div className={styles.totalWrapper}>
                    <div className={styles.totalPrice}>Total: {format(props.amount)}</div>
                    <Link to={"/"} className={styles.browse}><div onClick={() => props.hideCart()}>Checkout</div></Link>
                    </div>
                ):(
                    <div className={styles.emptyWrapper}>
                    <div className={styles.emptyText}>Your Cart is Empty</div>
                    <Link to={"/items"} className={styles.browse}><div onClick={() => props.hideCart()}>Browse</div></Link>
                    </div>
                )
            }
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export {Cart};