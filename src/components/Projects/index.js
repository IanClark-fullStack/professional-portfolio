import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='py-10 pb-10 pr-2 mx-auto md:w-5/6 lg:w-5/6'>
            <SectionTitle title ='Projects'/>
            <SectionTitle title ='Fun'/>

            <ProjectsBrowserContainer />
        </section> 
    )  
};