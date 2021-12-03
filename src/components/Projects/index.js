import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='container py-10 pb-10 pr-2 mx-auto'>
            <SectionTitle title ='Projects'/>
            <SectionTitle title ='Fun'/>

            <ProjectsBrowserContainer />
        </section> 
    )  
};