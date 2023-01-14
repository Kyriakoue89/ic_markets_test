import React from "react";
import "./App.css"
import {premiumProducts} from "./premium_products";

export const PremiumProducts = () => {
    return (
        <>
            <div className="basic-products-container">
                <h1>Premium Products</h1>
                <div className="row">
                    {premiumProducts.map((data, key) => {
                        return (
                            <PremiumProductData key={key}
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

const PremiumProductData = ({title,short_description,brand, image, price}) => {
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