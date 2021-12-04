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
        <section className='container py-10 pb-10 pr-2 mx-auto'>
            <h2 className='font-display text-left text-6xl md:text-8xl md:mx-auto ml-8 pb-2 md:pb-4'>Contact</h2>
            
        

    
            <ContactForm />
        </section> 
    )  
};