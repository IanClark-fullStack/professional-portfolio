import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useState } from 'react';


export default function() {
    const [pageSelect, setPageSelect] = useState('home');
    const changeView = (view) => setPageSelect(view);

    return (
        <main className='mx-none md:mx-24 lg:mx-52'>
            <Nav pageSelect={pageSelect} changeView={changeView} /> 

            {pageSelect === 'about' && <About />}
            {pageSelect === 'projects' && <Projects />}
            {pageSelect === 'contact' && <Contact />}
            {/* {pageSelect === 'Resume' && <Resume />} */}
            
            {/* <Footer />  */}
        </main>
    )
};