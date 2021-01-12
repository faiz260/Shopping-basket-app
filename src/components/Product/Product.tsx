import React from "react";
import { useSelector } from "react-redux";
import { store, add } from "../../Store/index";
import { ProductItem } from "../../global";
import "./Product.css";

const Product = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <div className="product-container">
      {products.map((product: ProductItem) => (
          <div className="product">
            <div className="product-info">
              <p>{product.title}</p>
              <p className="product-price">
                <small>$</small>
                <strong>{product.price}</strong>
              </p>
            </div>
            <img className="product-img" src={product.imageUrl} alt="" />
            <button
              onClick={() => {
                store.dispatch(add(product));
              }}
            >
              Add to basket
            </button>
          </div>
      ))}
    </div>
  );
};

export { Product };
