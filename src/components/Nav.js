
import NavLinks from './NavLinks';

const navLinks = ['projects', 'about', 'contact'];

export default function Nav() {
    return (
        <nav className='flex flex-row justify-between items-center py-3 border-b-2 border-black md:text-3xl'>
            <h4 className='justify-start text-3xl ml-2 md:text-6xl'>iC</h4>
            <NavLinks navLinksProp={navLinks} />
        </nav>
    );
}