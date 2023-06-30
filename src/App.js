import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Items} from "./pages/Items";
import {About} from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import {data} from "./data/items";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartStatus: false,
      totalAmount: 0,
      content: [],
      amount: 0,
    }
    // this.hideCart = this.hideCart.bind(this);
  }
  format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    });

    return formatter.format(amount);
  };

  findAmount = () => {
    console.log("HI", this.state.content);
    if(this.state.content.length===0){
      this.setState({amount: 0});
    }
    else{
      const currentcontent = this.state.content;
      let sum = 0;
      currentcontent.map((product) => {
        sum = sum + (product.qty)*(product.key.price);
        console.log(product, sum);
      }
      )
      this.setState({amount: sum});
    }
    console.log(this.state.amount);
  }

  updateQty= async(fruitId, val) => {
    const currentcontent = this.state.content;
    const checkProduct = currentcontent.filter((item) =>
      item.key.id === fruitId
    )
    if(checkProduct.length>0){
      checkProduct[0].qty = val;
      if(checkProduct[0].qty === 0 || checkProduct[0].qty<0){
        const newcontent = currentcontent.filter((item) =>
          item.key.id !== fruitId
        )
        await this.setState({content: newcontent});
      }
      else{
        await this.setState({content : currentcontent});
      }
    }       
  }

  addToCart = async (product) => {
    const checkProduct = this.state.content.filter(
      (item) => item.key.id === product.id
    );
    const currentcontent = this.state.content;
    if(checkProduct.length === 1){
      currentcontent.map((sameincart)=>{
        if(sameincart.key.id === checkProduct[0].key.id){
          sameincart.qty = sameincart.qty+1;
        }
      });
      await this.setState({content: currentcontent});
    }
    else{
      const objectInsert = {key: product, qty: 1};
      const currentcontent = this.state.content;
      await this.setState({content: [...currentcontent, objectInsert]});
    }
    console.log(this.state.content);
  }

  showCart = () => {
    this.setState({cartStatus: true});
  }
  hideCart = () => {
    this.setState({cartStatus: false});
  }
  render(){
    return(
      <>
        <Cart cartStatus = {this.state.cartStatus} hideCart = {this.hideCart} updateQty = {this.updateQty} content = {this.state.content} amount={this.state.amount}/>
        <Navbar cart = {this.state.content} showCart = {this.showCart} findAmount = {this.findAmount}/>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/items" element = {<Items addToCart={this.addToCart} updateQty = {this.updateQty} content={this.state.content}/>}/> 
          <Route path="/about" element = {<About />}/>
        </Routes>
      </>
    )
  }
}

export default App;
