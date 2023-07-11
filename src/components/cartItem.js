import React from "react";
import style from "../css/cartitem.module.css";

function CartItem(props){
    const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
    });
    return formatter.format(amount);
    };
    return(
        <div className={style.container}>
            <div className={style.imageHolder}>
                <img src={props.imgUrl} alt = {props.name} className= {style.Img} loading="lazy"/>
            </div>
            <div className={style.text}>
                <div className={style.title}>
                    {props.name}
                </div>
                <div className={style.inCart}>
                    <div className={style.qtyChange}>
                        <div className={style.qty}>{props.quantity} kg</div>
                    </div>
                    <div className={style.subtotal}>Subtotal: {format(props.quantity*props.price)}</div>
                </div>
            </div>
        </div>
    )
}

export {CartItem};