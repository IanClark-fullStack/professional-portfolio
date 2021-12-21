import PreNav from './Prenav';
import Nav from './Nav';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import { useState } from 'react';


export default function() {
    const [pageSelect, setPageSelect] = useState('home');
    const changeView = (view) => setPageSelect(view);
    const defaultView = () => {
        if (pageSelect === 'home') {
            return <> <Header /> <Projects /> <About /> <Resume /> </>
        }
    }
    return (
        <main className='mx-4 md:mx-14 border-l-2 border-r-2 border-black'>
            <PreNav />

            <Nav pageSelect={pageSelect} changeView={changeView} /> 
            {defaultView()}
                {pageSelect === 'About' && <About />}
                {pageSelect === 'Projects' && <Projects />}
                {pageSelect === 'Contact' && <Contact />}
                {pageSelect === 'Resume' && <Resume />}
            <Footer /> 
        </main>
    )
};