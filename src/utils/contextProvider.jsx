import React, { createContext, useEffect, useState } from 'react';

import prod1 from '../assets/img/prod1.jpg'
import prod2 from '../assets/img/prod2.jpg'
import prod3 from '../assets/img/prod3.jpg'
import prod4 from '../assets/img/prod4.jpg'
import prod5 from '../assets/img/prod5.jpg'
import prod6 from '../assets/img/prod6.jpg'
import prod7 from '../assets/img/prod7.jpg'
import prod8 from '../assets/img/prod8.jpg'
import prod9 from '../assets/img/prod9.jpg'
import prod10 from '../assets/img/prod10.jpg'
import prod11 from '../assets/img/prod11.jpg'
import prod12 from '../assets/img/prod12.jpg'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {

    const [productDataBase, setProductDatabase] = useState([
        {
            name: `Product1`,
            price: 20.5,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod1
        },
        {
            name: `Product2`,
            price: 33.12,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod2
        },
        {
            name: `Product3`,
            price: 70.4,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod3
        },
        {
            name: `Product4`,
            price: 25.9,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod4
        },
        {
            name: `Product5`,
            price: 49.9,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod5
        },
        {
            name: `Product6`,
            price: 120.99,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod6
        },
        {
            name: `Product7`,
            price: 89.99,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod7
        },
        {
            name: `Product8`,
            price: 38.99,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod8
        },
        {
            name: `Product9`,
            price: 58.99,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod9
        },
        {
            name: `Product10`,
            price: 55.5,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod10
        },
        {
            name: `Product11`,
            price: 23.3,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod11
        },
        {
            name: `Product12`,
            price: 78.99,
            description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
            img: prod12
        }
    ])



    // let newTab = [...productDataBase]

    // newTab.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12)

    // setProductDatabase(newTab)

    // console.log(newTab);

    return (
        <>
            <MyContext.Provider value={[productDataBase, setProductDatabase]}>
                {children}
            </MyContext.Provider>
        </>
    );
};

