import { useState } from 'react';
export default function ListLink(props) {
    const [hasHover, setHover] = useState(false);
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
    return (
        <li style={hasHover ? styles.boxFocus : styles.box }className='mx-4 pb-2 inline-block md:my-4'>  
            <a href={props.url} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='pb-2 border-b-4 border-black hover:pb-4 hover:text-bright hover:border-bright' 
                target='_blank'
                
            >
                {props.name}
            </a>
        </li>

    )
}

