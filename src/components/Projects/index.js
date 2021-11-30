import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='container py-10 pb-10 md:w-8/12 md:border-black md:border-b-2 mx-auto'>
            <SectionTitle />

            <ProjectsBrowserContainer />
        </section> 
    )  
};