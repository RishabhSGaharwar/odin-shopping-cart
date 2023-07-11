import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import CartImage from "../images/navbar/cart.jpg"

class Navbar extends Component{
    renderQty(){
        // if(this.props.cart!==undefined && this.props.cart.length>0){
        return(
            <div className={styles.itemCount}>{this.props.cart.length}</div>
        )
        // }
    }
    render(props){
        return(
            <>
            <div className={styles.navbarcontainer}>
                <nav className={styles.navbar}>

                    <Link className={styles.logo} to={"/"}>
                        <h1 className={styles.title}>FRESH FRUITS</h1>
                    </Link>
                    <div className={styles.right}>

                    <Link to="/" className = {styles.home}>Home</Link>
                    <Link to="/items" className = {styles.items}>Items</Link>

                    <button className={styles.cartBtn} onClick={() => {this.props.findAmount(); this.props.showCart()}}>
                        <img src={CartImage} alt="Cart" className={styles.CartImage}/>{
                            (this.props.cart!==undefined && this.props.cart.length>0)?this.renderQty():null
                        }
                    </button>
                    </div>
                </nav>
            </div>
            {/* <Cart open = {this.state.open} hideCart = {this.hideCart} content = {this.props.cart}/> */}
            </>
        )
    }
}

export {Navbar};
