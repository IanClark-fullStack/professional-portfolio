import stockAppImage from './assets/newNewsStock.jpg';
import FeaturedProject1 from './Featured/FeaturedProject1';
import FeaturedProject2 from './Featured/FeaturedProject2';
import FeaturedProject3 from './Featured/FeaturedProject3';
import FeaturedProject4 from './Featured/FeaturedProject4';
import FeaturedProject5 from './Featured/FeaturedProject5';
import FeaturedProject6 from './Featured/FeaturedProject6';
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
            name: 'Fitness Tracker', 
            repo: 'https://github.com/IanClark-fullStack/workout_tracker',
            deployed: 'https://rocky-spire-47043.herokuapp.com/',
        },
        project2: {
            id: 2,
            name: 'Offline Budget Tracker', 
            repo: 'https://github.com/IanClark-fullStack/budget-tracking',
            deployed: 'https://calm-lowlands-38009.herokuapp.com/',
        },
        project3: {
            id: 3,
            name: 'Local Coast', 
            repo: 'https://github.com/stewsabatino/local-coast',
            deployed: 'https://local-coast.herokuapp.com/',
            description: 'Collaborative fullstack application using Spotify API',
        },
        project4: {
            id: 4,
            name: 'Employee CMS', 
            repo: 'https://github.com/IanClark-fullStack/employee-cms/',
            description: 'MySql database generator',
            tech: ['MySql', 'Node', 'JavaScript', 'Inquirer', 'Chalk']
        },
        project5: {
            id: 5,
            name: 'E-Commerce Backend', 
            repo: 'https://github.com/IanClark-fullStack/e-commerce-BackEndApplication',
            description: 'Object relational mapping paradigm.',
            tech: ['Sequelize', 'Express.js', 'Node', 'JavaScript', 'MySql']
        },
        project6: {
            id: 6,
            name: 'News-Stock API', 
            repo: 'https://github.com/IanClark-fullStack/muskytweets',
            deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
        },
    };

    // const projects = [
    //     {
    //         project1: {
    //             id: 1,
    //             name: 'Fitness Tracker', 
    //             repo: 'https://github.com/IanClark-fullStack/workout_tracker',
    //             deployed: 'https://rocky-spire-47043.herokuapp.com/',
    //         },
    //     },
    //     {
    //         project2: {
    //             id: 2,
    //             name: 'Offline Budget Tracker', 
    //             repo: 'https://github.com/IanClark-fullStack/budget-tracking',
    //             deployed: 'https://calm-lowlands-38009.herokuapp.com/',
    //         },
    //     },
    //     {
    //         project3: {
    //             id: 3,
    //             name: 'Local Coast', 
    //             repo: 'https://github.com/stewsabatino/local-coast',
    //             deployed: 'https://local-coast.herokuapp.com/',
    //             description: 'Collaborative fullstack application using Spotify API',
    //         },
    //     },
    //     {
    //         project4: {
    //             id: 4,
    //             name: 'Employee CMS', 
    //             repo: 'https://github.com/IanClark-fullStack/employee-cms/',
    //             description: 'MySql database generator, representing the relationships between employees, their respective positions and company departments',
    //         },
    //     },
    //     {
    //         project5: {
    //             id: 5,
    //             name: 'E-Commerce Backend', 
    //             repo: 'https://github.com/IanClark-fullStack/e-commerce-BackEndApplication',
    //             description: 'Object relational mapping paradigm.',
    //             tech: ['Sequelize', 'Express.js', 'Node', 'JavaScript', 'MySql']
    //         },
    //     },
    //     {
    //         project6: {
    //             id: 6,
    //             name: 'News-Stock API', 
    //             repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //             deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //         },
    //     }
    // ];

    return (
        
        <div id='scroll-inside' style={styles.scrollable} className='px-4 py-2 m-2 h-60 md:h-96 overflow-auto'>
            <div className='flex justify-evenly items-center py-8'>
                <FeaturedProject1 projectsProp={projects} />
                <FeaturedProject2 projectsProp={projects} />
            </div>
            <div className='flex justify-evenly items-center py-8'>
                <FeaturedProject3 projectsProp={projects} />
                <FeaturedProject4 projectsProp={projects} />
            </div>

            <div className='flex justify-evenly items-center py-8'>
                <FeaturedProject5 projectsProp={projects} />
                <FeaturedProject6 projectsProp={projects} />
            </div>
        </div>
    )
};
