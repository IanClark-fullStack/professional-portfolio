import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='container py-10 pb-10 pr-2 md:w-8/12 mx-auto'>
            <SectionTitle />

            <ProjectsBrowserContainer />
        </section> 
    )  
};