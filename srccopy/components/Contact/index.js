import ContactForm from './ContactForm';
// import { useState } from 'react';

export default function Contact() {
    // const externalLinks = [{
    //         name: 'linkedIn', 
    //         url: 'https://www.linkedin.com/in/ianclark-fullstack/',
    // },

    // {    
    //     name: 'gitHub',
    //     url: 'https://github.com/IanClark-fullStack',
    // },
    // {
    //     name: 'are.na',
    //     url: 'https://www.are.na/ian-clark-h9y5gqm3qei'
    // }];
    // // styles = {
    // //     hoverOver = {
    // //         borderBottom: '2px', 

    // //     }
    // // }
    
        

    return (
        <section className='py-10 pb-10 pr-2 mx-auto w-10/12 md:w-5/12 lg:w-7/12'>
            <h2 className='font-display text-center text-6xl md:text-7xl md:mx-auto pb-2 md:py-8'>Contact</h2>
            
        

    
            <ContactForm />
        </section> 
    )  
};