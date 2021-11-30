export default function NavLinks ({ navLinksProp }) {
    return (
        <ul className='flex justify-end mx-2 md:mx-8'>
        { navLinksProp.map((link) => <li key={link} className='mx-1 md:mx-8'><a href={`#${link}`}>{link}</a></li>)}
        </ul>
    ); 
}