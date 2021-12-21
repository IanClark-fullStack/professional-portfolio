import { useState } from 'react';
import NavLinks from './NavLinks';
const navLinks = ['Projects', 'About', 'Contact', 'Resume'];
const onHover = 'border-b-2 border-bright mx-1 md:mx-5';

export default function Nav({ pageSelect, changeView }) {
    
    return (
        <nav className='font-display flex flex-row justify-between items-center py-3 md:px-8 border-t-2 border-b-2 border-black md:text-xl mx-none'>
            <a onClick={() => changeView('home')}>
                <h4 className='justify-start text-3xl ml-2 md:text-6xl'>iC</h4>
            </a>
                {/* <NavLinks navLinksProp={navLinks} /> */}
            <ul className='flex justify-end mx-2 md:ml-14'>
                
                { navLinks.map((link, index) => 
                    <NavLinks key={index} link={link} changeView={changeView} pageSelect={pageSelect} /> 
                )}
            
            </ul>
        
        </nav>
        
    );
}