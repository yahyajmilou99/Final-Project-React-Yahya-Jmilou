import React from 'react';
import { ContactPages } from './components/contactPages';
import { Header } from '../../layouts/Header';
import { Footer } from '../../layouts/Footer';

export const Contact = () => {
    return (
        <>
            <Header/>
            <ContactPages/>
            <Footer/>
        </>
    );
};

