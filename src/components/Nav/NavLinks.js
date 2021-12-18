import {useState} from 'react';
import { Link } from 'react-router-dom';

const onHover = 'border-b-2 border-bright mx-1 md:mx-5 cursor-pointer';

export default function NavLinks({ link, pageSelect, changeView }) {
    const [hoverStyle, setHoverStyle] = useState(false);


    return (
        <li className={hoverStyle ? onHover : 'border-none mx-1 md:mx-5 hover:cursor-fancy' }> 
                    
                    <a
                        onClick={() => changeView(`${link}`)} 
                        onMouseEnter={() => setHoverStyle(true)}
                        onMouseLeave={() => setHoverStyle(false)}
                        className={pageSelect === link ? 'border-b-2 border-bright' : 'cursor-fancy' }

                    >
                            {link}
                    </a>
                </li>
    )
}