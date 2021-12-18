import SectionTitle from './SectionTitle';
import ProjectsBrowserContainer from './ProjectsBrowserContainer';
export default function Projects() {
    return (
        <section id='Projects' className='py-10 pb-10 md:pr-2 mx-auto w-11/12 pl-1 md:pl-0 md:w-11/12 lg:w-7/12 lg:h-128'>
            <SectionTitle title='Projects'/>

            <ProjectsBrowserContainer />
        </section> 
    )  
};