import Nav from './Nav';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';


export default function() {
    const [pageSelect, setPageSelect] = useState('home');
    const changeView = (view) => setPageSelect(view);
    const defaultView = () => {
        if (pageSelect === 'home') {
            return <> <Header /> <About /> </>
        }
    }
    return (
        <main className='mx-none md:mx-4 lg:mx-52'>
            <Nav pageSelect={pageSelect} changeView={changeView} /> 
            {defaultView()}
               
                

                {pageSelect === 'about' && <About />}
                {pageSelect === 'projects' && <Projects />}
                {pageSelect === 'contact' && <Contact />}
            
            {/* {pageSelect === 'Resume' && <Resume />} */}
            
            <Footer /> 
        </main>
    )
};