import { useState } from 'react';
export default function ListLink(props) {
    const [hasHover, setHover] = useState(false);
    const styles = {
        box: {
            
            overflow: 'hidden'
        }, 
        boxFocus: {
            boxShadow: '4px 4px 0 rgba(41, 26, 235)', 
            border: '2px solid rgba(41, 26, 235)', 
   
            overflow: 'hidden'
        }
    }
    return (
        <li style={hasHover ? styles.boxFocus : styles.box }className='pb-2 h-6 mx-3 md:mx-6 inline-block h-6 border-b-2 border-black md:h-12 text-sm md:my-4 md:text-lg md:mx-18'>  
            <a href={props.url}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='pb-2 px-1 border-b-4 border-black hover:pb-4 hover:text-bright hover:border-bright' 
                target='_blank'
                
            >
                {props.name}
            </a>
        </li>

    )
}

