const navLinks = ['projects', 'about', 'contact'];

export default function Nav({ pageSelect, changeView }) {

    return (
        <nav className='flex flex-row justify-between items-center py-3 border-b-2 border-black md:text-3xl'>
            <h4 className='justify-start text-3xl ml-2 md:text-6xl'>iC</h4>
                {/* <NavLinks navLinksProp={navLinks} /> */}
                <ul className='flex justify-end mx-2 md:mx-8'>
                    { navLinks.map((link) => 
                    <li key={link} className='mx-1 md:mx-8'>
                        <a 
                            href={`#${link}`} 
                            onClick={() => changeView(`${link}`)}
                            className={pageSelect === {link} ? 'border-b-2 border-bright' : 'border-none' }
                        >
                                {link}
                        </a>
                    </li>)}
        </ul>
        </nav>
    );
}