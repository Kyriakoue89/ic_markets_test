import React from "react";
import "./App.css"
import {basicProducts} from "./products";

export const BasicProducts = () => {
    return (
        <>
            <div className="basic-products-container">
                <h1>Basic Products</h1>
                <div className="row">
                {basicProducts.map((data, key) => {
                    return (
                        <BasicProductData key={key}
                                          title = {data.title}
                                          short_description = {data.short_description}
                                          image = {data.image}
                                          price = {data.price}
                                          brand = {data.brand}
                                          />
                    );
                })}
                </div>
            </div>
        </>

    );
};

const BasicProductData = ({title,short_description,brand,image, price}) => {
    return (
        <div className="col-sm-3">
            <img src={image} className="thubmnail" alt={title}/>
			<div className="products-info">
            	<h2 className="product-title">{title}</h2>
            	<p className="product-description">{short_description}</p>
            	<p className="product-brand"><span>Brand:</span> {brand}</p>
            	<p className="product-price"><span>Price:</span>{price}</p>
				<a className="product-link" href="#linktoproduct">Learn more</a>
			</div>
        </div>
    );
};