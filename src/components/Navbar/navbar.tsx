import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductItem } from "../../global";
import "./navbar.css";

function Navbar() {

  const products = useSelector((state: ProductItem[]) => state);

  return (
    <div className="header">
      <Link to="/">
        <img
          alt=""
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/orders" className="header_link">
          <div className="header_options">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header_options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/basket" className="header_link">
          <div className="header_optionBasket">
            <ShoppingCartIcon className="shopping_cartIcon" />
            <span className="header_optionLineTwo header_basketCount">
            {products.filter(product => product.added).length} 
            </span>
          </div>
        </Link> 
      </div>
    </div>
  );
}

export default Navbar;
