import Nav from '../Nav';
import HeaderInfo from './HeaderInfo';
export default function Header() {
    return (
        <header className='flex flex-col w-auto border-2 border-black font-display'>
            <Nav /> 
            <HeaderInfo />
        </header>
    )
}