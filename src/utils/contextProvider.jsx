import React, { createContext, useState } from 'react';

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

    const [productDataBase,setProductDatabase] = useState([])

    let product1 = {
        name: `Product1`,
        price: 20.5 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod1
    }
    let product2 = {
        name: `Product2`,
        price: 33.12 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod2
    }
    let product3 = {
        name: `Product3`,
        price: 70.4 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod3
    }
    let product4 = {
        name: `Product4`,
        price: 25.9 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod4
    }
    let product5 = {
        name: `Product5`,
        price: 49.9 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod5
    }
    let product6 = {
        name: `Product6`,
        price: 120.99 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod6
    }
    let product7 = {
        name: `Product7`,
        price: 89.99 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod7
    }
    let product8 = {
        name: `Product8`,
        price: 38.99 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod8
    }
    let product9 = {
        name: `Product9`,
        price: 58.99 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod9
    }
    let product10 = {
        name: `Product10`,
        price: 55.5 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod10
    }
    let product11 = {
        name: `Product11`,
        price: 23.3 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod11
    }
    let product12 = {
        name: `Product12`,
        price: 78.99 ,
        description: `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....`,
        img: prod12
    }

    productDataBase.push(product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12)
    console.log(productDataBase);

    return (
        <>
            <MyContext.Provider value={[productDataBase,setProductDatabase,product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12]}>
                {children}
            </MyContext.Provider>
        </>
    );
};

