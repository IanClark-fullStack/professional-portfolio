import { useState } from 'react';
import ListLink from './ListLink';

export default function Footer() {
    const externalLinks = [{
        name: 'linkedIn', 
        url: 'https://www.linkedin.com/in/ianclark-fullstack/',
    },
    {    
        name: 'gitHub',
        url: 'https://github.com/IanClark-fullStack',
    },
    {
        name: 'are.na',
        url: 'https://www.are.na/ian-clark-h9y5gqm3qei'
    }];
    
    const [hasHover, setHover] = useState(false);
    
    return (
        <section className='w-full py-10 pb-10 pr-2 mx-auto border-t-2 border-2 border-black'>
            <h2 className='font-display text-center text-3xl md:text-2xl md:mx-auto ml-8 pb-2 md:pb-4'>Let's Connect</h2>
            
                <ul className='font-display text-left leading-3 pb-4 md:text-xl md:text-center md:leading-9'>
                {/* <span style={shape ? styles.hShape : styles.reggaeShape} /> */}
                {externalLinks.map((el, index) => 
                    <ListLink key={index} url={el.url} name={el.name} />
                
            
                )}
            
                </ul>
        </section> 
    )  
};
