import stockAppImage from './assets/newNewsStock.jpg';
import FeaturedProject1 from './Featured/FeaturedProject1';
import FeaturedProject2 from './Featured/FeaturedProject2';
import FeaturedProject3 from './Featured/FeaturedProject3';



export default function ProjectsBrowserContainerWindow() {
    const projects = {
        project1: {
            id: 1,
            name: 'Project1 Name', 
            repo: 'https://github.com/IanClark-fullStack/muskytweets',
            deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
        },
        project2: {
            id: 2,
            name: 'Project2 Name', 
            repo: 'https://github.com/IanClark-fullStack/muskytweets',
            deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
        },
        project3: {
            id: 3,
            name: 'Project3 Name', 
            repo: 'https://github.com/IanClark-fullStack/muskytweets',
            deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
        },
    };


    return (
        <>
            <div className='flex justify-center items-center py-3'>
                <FeaturedProject1 projectsProp={projects} />
            </div>

            <div className='flex justify-center items-center mx-auto py-3'>
                <FeaturedProject2 projectsProp={projects} />
                <FeaturedProject3 projectsProp={projects} />
            </div>
        </>
    )
};
