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
                                              link = {data.link}
                            />
                        );
                    })}
                </div>
            </div>
        </>

    );
};

const PremiumProductData = ({title,short_description,link, image, price}) => {
    return (
        <div className="col-sm-4">
            {image}
            {title}
            {short_description}
            {link}
            {price}
        </div>
    );
};