// Import Image Assets 
// import passWordGenerator from '../images/passWordGenerator.jpg'
import ProjectsBrowserContainerWindow from './ProjectsBrowserContainerWindow';
import ProjectsBrowserNav from './ProjectBrowserNav';
// Create Styles to be Applied 
export default function FeaturedProject1() {
    return (
        <div id='projectHover' className='mt-4 bg-blue mx-none lg:max-h-128'>
            <article className='mx-auto bg-white border-4 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                {/* <BrowserContainerNavbar /> */}
                <ProjectsBrowserNav />
                
                <ProjectsBrowserContainerWindow /> 
            </article>
        </div>
    )

};