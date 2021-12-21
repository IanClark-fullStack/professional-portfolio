import stockAppImage from './assets/newNewsStock.jpg';
import FeaturedProject1 from './Featured/FeaturedProject1';
import FeaturedProject2 from './Featured/FeaturedProject2';
import FeaturedProject3 from './Featured/FeaturedProject3';
import FeaturedProject4 from './Featured/FeaturedProject4';
import FeaturedProject5 from './Featured/FeaturedProject5';
import FeaturedProject6 from './Featured/FeaturedProject6';
import FeaturedProjects from './Featured/FeaturedProjects';
import { useState } from 'react';

// useState = Projects Items as an Empty array by Default, 
    
    // Map through the array of Project Data 
        // Accessing the Index
const bookImage = 'bg-book-search bg-no-repeat bg-cover bg-center mx-auto h-44 lg:h-60 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const dndImage = 'bg-dnd bg-no-repeat bg-cover bg-center mx-auto h-44 lg:h-60 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const budgetImage = 'bg-budget-tracker bg-no-repeat bg-cover bg-center mx-auto h-44 lg:h-60 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const fitnessImage = 'mx-auto h-44 lg:h-60 bg-cover bg-center bg-fitness-tracker bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const spotifyImage = 'mx-auto h-44 lg:h-60 bg-cover bg-center bg-spotify-api bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const cmsImage = 'bg-company-cms bg-no-repeat bg-cover bg-center mx-auto h-44 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const ecommerceImage = 'mx-auto h-44 lg:h-60 bg-cover bg-center bg-ecommerce bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
const muskyTweetsImage='mx-auto h-44 lg:h-60 bg-cover bg-center bg-muskyTweets-pattern bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';


export default function ProjectsBrowserContainerWindow() {
    // const [scroll, setScroll] = useState()
    const styles = {
        scrollable: { 
            overflow: 'auto'
        },        
    }
     

    const projects = [
        {
            id: 9,
            name: 'Book Search Engine', 
            desc: ['MERN-Stack application and book search engine.','Allows users to search and browse books using Google Books API, as well as save and manage books on their individual profile.'],
            offHover: bookImage,
            summary: 'RESTful API to GraphQL API Conversion',
            tech: ['GraphQL', 'MongoDB', 'React', 'Node', 'Express', 'JSON Web Token', 'bCrypt', 'Apollo Server'],
            repo: 'https://github.com/IanClark-fullStack/GraphQl-booksearch',
            deployed: 'https://stark-beach-08646.herokuapp.com/',
            
        },
        {
            id: 8,
            name: 'DnD Character Tracker', 
            repo: 'https://github.com/IanClark-fullStack/dnd-stat-tracker',
            deployed: 'https://floating-oasis-62391.herokuapp.com/dashboard',
            offHover: dndImage,
            desc: ['Fullstack application, collaboratively drafted and developed.', 'Keep track of complex character data, stats and dice rolls in one place.'],
            summary: 'Intuitive DnD Application',
            tech: ['GraphQL', 'MongoDB', 'React', 'Node', 'Express', 'JSON Web Token', 'bCrypt', 'Apollo Server', 'Material UI'],
            
        },
        {
            id: 7,
            name: 'Offline Budget Tracker', 
            repo: 'https://github.com/IanClark-fullStack/budget-tracking',
            deployed: 'https://calm-lowlands-38009.herokuapp.com/',
            offHover: budgetImage, 
            desc: ['Track and management financial assets on the go. Regardless of internet connection.','When your internet connection goes offline, the application makes use of indexedDB to cache the relevant data entered while offline.'],
            summary: 'Progressive Web Application',
            tech: ['ChartJS', 'MongoDB', 'Heroku', 'Node', 'Express', 'Webpack', 'AWS'],
            
        },
        {
            id: 6,
            name: 'Fitness Tracker', 
            repo: 'https://github.com/IanClark-fullStack/workout_tracker',
            deployed: 'https://rocky-spire-47043.herokuapp.com/',
            offHover: fitnessImage,
            desc: ['Create & track workouts,  including total distance, duration and weight used.','Log multiple workouts within a one session'],
            summary: 'Workout Tracker Application',
            tech: ['ChartJS', 'MongoDB', 'Node', 'Express', 'Heroku'],
            
        },
        {
            id: 5,
            name: 'Local Coast', 
            repo: 'https://github.com/stewsabatino/local-coast',
            deployed: 'https://local-coast.herokuapp.com/',
            offHover: spotifyImage,
            desc: ['Application drafted and developed for the purpose on the creating playlists', 'Giving users a space to showcase their playlists and explore content from other users outside of the native spotify application.'],
            summary: 'Collaborative Fullstack Application using Spotify API',
            tech: ['Sequelize', 'MySQL2', 'Spotify', 'Node', 'Express', 'Handlebars', 'Heroku'], 
        },
        {
            id: 4,
            name: 'Employee CMS', 
            repo: 'https://github.com/IanClark-fullStack/employee-cms/',
            offHover: cmsImage,
            desc: ['Node based application for generating a MySql company database', 'representing the relationships between employees, their respective positions and the departments they belong to.'],
            summary: 'MySql Database Generator',
            tech: ['MySql', 'Node', 'OOP', 'CLI', 'JavaScript', 'Inquirer', 'Chalk'] 
        },
        {
            id: 3,
            name: 'E-Commerce Backend', 
            repo: 'https://github.com/IanClark-fullStack/e-commerce-BackEndApplication',
            offHover: ecommerceImage,
            desc: ['Drafted and developed in order to complete the usual CRUD interactions necessary for e-commerce databases.'],
            summary: 'e-Commerce style database created using object relational mapping paradigms.',
            tech: ['Sequelize', 'Express.js', 'Node', 'JavaScript', 'MySql', 'OOP', 'Insomnia']
            
        },
        // {
        //     id: 6,
        //     name: 'Local Coast', 
        //     repo: 'https://github.com/stewsabatino/local-coast',
        //     deployed: 'https://local-coast.herokuapp.com/',
        //     offHover: spotifyImage,
        //     description: 'Collaborative fullstack application using Spotify API',
        //     desc: ['Application drafted and developed for the purpose on the creating playlists', 'Giving users a space to showcase their playlists and explore content from other users outside of the native spotify application.'],
        //     summary: 'Spotify API Application',
        //     tech: ['Sequelize', 'MySQL2', 'Spotify', 'Node', 'Express', 'Handlebars', 'Heroku'], 
        // },
        // {
        //     id: 2,
        //     name: 'News-Stock API', 
        //     repo: 'https://github.com/IanClark-fullStack/muskytweets',
        //     deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
        //     offHover: muskyTweetsImage,
        //     description: 'Collaborative fullstack application using Spotify API',
        //     desc: ['Application drafted and developed for the purpose on the creating playlists', 'Giving users a space to showcase their playlists and explore content from other users outside of the native spotify application.'],
        //     summary: 'Spotify API Application',
        //     tech: ['Sequelize', 'MySQL2', 'Spotify', 'Node', 'Express', 'Handlebars', 'Heroku'], 
        // },
    ];





    // const projects = {
    //     project7: {
    //         id: 7,
    //         name: 'Book Search Engine', 
    //         desc: ['MERN-Stack application and book search engine.','Allows users to search and browse books using Google Books API, as well as save and manage books on their individual profile.'],
    //         summary: 'RESTful API to GraphQL API Conversion',
    //         tech: ['GraphQL', 'MongoDB', 'React', 'Node', 'Express', 'JSON Web Token', 'bCrypt', 'Apollo Server'],
    //         repo: 'https://github.com/IanClark-fullStack/GraphQl-booksearch',
    //         deployed: 'https://stark-beach-08646.herokuapp.com/',
    //     },
    //     project1: {
    //         id: 1,
    //         name: 'Fitness Tracker', 
    //         repo: 'https://github.com/IanClark-fullStack/workout_tracker',
    //         deployed: 'https://rocky-spire-47043.herokuapp.com/',
    //     },
    //     project2: {
    //         id: 2,
    //         name: 'Offline Budget Tracker', 
    //         repo: 'https://github.com/IanClark-fullStack/budget-tracking',
    //         deployed: 'https://calm-lowlands-38009.herokuapp.com/',
    //     },
       
    //     project3: {
    //         id: 3,
    //         name: 'Local Coast', 
    //         repo: 'https://github.com/stewsabatino/local-coast',
    //         deployed: 'https://local-coast.herokuapp.com/',
    //         description: 'Collaborative fullstack application using Spotify API',
    //     },
    //     project4: {
    //         id: 4,
    //         name: 'Employee CMS', 
    //         repo: 'https://github.com/IanClark-fullStack/employee-cms/',
    //         description: 'MySql database generator',
    //         tech: ['MySql', 'Node', 'JavaScript', 'Inquirer', 'Chalk']
    //     },
    //     project5: {
    //         id: 5,
    //         name: 'E-Commerce Backend', 
    //         repo: 'https://github.com/IanClark-fullStack/e-commerce-BackEndApplication',
    //         description: 'Object relational mapping paradigm.',
    //         tech: ['Sequelize', 'Express.js', 'Node', 'JavaScript', 'MySql']
    //     },
    //     project6: {
    //         id: 6,
    //         name: 'News-Stock API', 
    //         repo: 'https://github.com/IanClark-fullStack/muskytweets',
    //         deployed: 'https://ianclark-fullstack.github.io/muskytweets/',
    //     },
    // };

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
        
        <div id='scroll-inside' style={styles.scrollable} className='px-1 mb-1 md:px-4 h-72 md:h-96 lg:h-128 overflow-auto'>
                <FeaturedProjects projectsProp={projects} />
            {/* <div className='flex justify-evenly items-center py-8'>
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
            </div> */}
        </div>
    )
};
