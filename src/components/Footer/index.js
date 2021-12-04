import { useState } from 'react';

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
    const styles = {
        box: {
            // boxShadow: '4px 4px 0 rgba(243, 110, 240)', 
        
            border: '2px solid rgba(243, 110, 240)', 
            height: '40px',
            margin: '16px 38px',
            fontSize: '22px',
            overflow: 'hidden'
        }, 
        boxFocus: {
            boxShadow: '4px 4px 0 rgba(41, 26, 235)', 
            border: '2px solid rgba(41, 26, 235)', 
            height: '40px',
            margin: '16px 38px',
            fontSize: '22px',
            overflow: 'hidden'
        }
    }
    const [hasHover, setHover] = useState(false);
    
    return (
        <section className='container py-10 pb-10 pr-2 mx-auto'>
            <h2 className='font-display text-left text-6xl md:text-8xl md:mx-auto ml-8 pb-2 md:pb-4'>Contact</h2>
            
                <ul className='font-display text-left leading-3 pb-4 md:text-xl md:text-center md:leading-9'>
                {/* <span style={shape ? styles.hShape : styles.reggaeShape} /> */}
                {externalLinks.map((el) => 
                    <li key={el.url} style={hasHover ? styles.boxFocus : styles.box }className='mx-4 pb-2 inline-block md:my-4'>  
                        <a href={el.url} 
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className='pb-2 border-b-4 border-black hover:pb-4 hover:text-bright hover:border-bright' 
                            target='_blank'
                            
                        >
                            {el.name}
                        </a>
                    </li>
            
                )}
            
                </ul>
        </section> 
    )  
};
