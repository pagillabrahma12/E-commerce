// SingleProduct.js

import React from "react";
import { useState,useContext } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss"; 
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&filters[id]=${id}`);
  const {handleAddToCart}=useContext(Context)

  const Increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const Decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return null;
  const product = data.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377; {product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={Decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={Increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0], quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={18} />
                  <FaTwitter size={18} />
                  <FaInstagram size={18} />
                  <FaLinkedinIn size={18} />
                  <FaPinterest size={18} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* Pass category ID instead of product ID */}
        <RelatedProducts categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
