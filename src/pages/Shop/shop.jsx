import React from 'react';
import { ShopSections } from './components/shopSections';
import { Header } from '../../layouts/Header';
import { Footer } from '../../layouts/Footer';

export const Shop = () => {
    return (
        <>
            <Header/>
            <ShopSections/>
            {/* <Footer/> */}
        </>
    );
};

