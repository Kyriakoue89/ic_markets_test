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
                                          link = {data.link}
                                          />
                    );
                })}
                </div>
            </div>
        </>

    );
};

const BasicProductData = ({title,short_description,link, image, price}) => {
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