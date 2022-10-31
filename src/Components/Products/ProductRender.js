import React from "react";
import classes from "./ProductRender.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { cart } from "../Store/Store";

const ProductRender = ({ id, src, oldPrice, newPrice, productName }) => {

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(cart.updateCart(e.target.id))
  }

  return (
    <div className={classes.pdtContainer}>
      <img className={classes.img} src={src} alt="productImage" />
      <div className={classes.pdtDetails}>
        <p className={classes.pdtName}>{productName}</p>
        <div className={classes.pdtPrice}>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFAC4B" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFAC4B" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFAC4B" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFAC4B" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFAC4B" }}
            ></FontAwesomeIcon>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <p className={classes.oldPrice}>{oldPrice + `/-`}</p>{" "}
            <p className={classes.newPrice}>{newPrice + `/-`}</p>
          </div>
        </div>
      <div className={classes.buttonContainer}><button id={id} onClick={addToCart}>ADD TO CART</button></div>
      </div>
    </div>
  );
};

export default ProductRender;