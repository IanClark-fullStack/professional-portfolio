import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='py-10 pb-10 pr-2 mx-auto md:w-11/12 lg:w-7/12 lg:h-128'>
            <SectionTitle title='Projects'/>

            <ProjectsBrowserContainer />
        </section> 
    )  
};