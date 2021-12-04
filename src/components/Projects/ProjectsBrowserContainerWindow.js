import stockAppImage from './assets/newNewsStock.jpg';
import FeaturedProject1 from './Featured/FeaturedProject1';
import FeaturedProject2 from './Featured/FeaturedProject2';
import FeaturedProject3 from './Featured/FeaturedProject3';
import { useState } from 'react';

// useState = Projects Items as an Empty array by Default, 
    
    // Map through the array of Project Data 
        // Accessing the Index


export default function ProjectsBrowserContainerWindow() {
    // const [scroll, setScroll] = useState()
    const styles = {
        scrollable: { 
            overflow: 'auto'
        }
    }
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

    // const projects = [
    //     {
    //         project1: {
    //             id: 1,
    //             name: 'Project1 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     },
    //     {
    //         project2: {
    //             id: 2,
    //             name: 'Project2 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     },
    //     {
    //         project3: {
    //             id: 3,
    //             name: 'Project3 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     },
    //     {
    //         project4: {
    //             id: 4,
    //             name: 'Project4 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     },
    //     {
    //         project5: {
    //             id: 5,
    //             name: 'Project5 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     },
    //     {
    //         project6: {
    //             id: 6,
    //             name: 'Project6 Name', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     }
    // ];


    return (
        
        <div id='scroll-inside' style={styles.scrollable} className='px-4 py-2 m-2 h-60 md:h-72 w-auto md:w-10/12 overflow-auto'>
            <div className='flex justify-center items-center py-3'>
                <FeaturedProject1 projectsProp={projects} />
                <FeaturedProject1 projectsProp={projects} />
            </div>

            <div className='flex justify-center items-center mx-auto py-3'>
                <FeaturedProject2 projectsProp={projects} />
                <FeaturedProject3 projectsProp={projects} />
            </div>
        </div>
    )
};
