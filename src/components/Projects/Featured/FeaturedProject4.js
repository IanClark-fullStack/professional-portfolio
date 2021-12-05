
import { useState } from 'react';


export default function FeaturedProject4({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);
    const projectFeature = projectsProp.project4;
    const imageBackground = 'bg-company-cms bg-no-repeat bg-cover bg-center mx-auto h-28 md:h-44 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    const replaceImageBackground = 'mx-auto h-28 md:h-44 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    return (
        <div
            onMouseEnter={() => setProjectHover(true)} 
            onMouseLeave={() => setProjectHover(false)}
            className={projectHover ? 'w-3/5 max-w-xs bg-bright border-2 border-blue ml-5' 
            : 'w-3/5 max-w-xs bg-blue border-2 border-bright ml-5'}>
                <article className={projectHover ? replaceImageBackground : imageBackground}>
                    {projectHover ?(

                        <div id='info1' className='itemsCenter font-display mt-4'>
                            <h4 id='project-title' className='text-white text-md md:text-3xl text-center'>    
                                {projectFeature.name}
                            </h4>
                            <ul id='project-links' className='text-white text-center'>
                                <li>
                                    <a href={projectFeature.repo} 
                                    className='hover:pb-1 hover:underline hover:text-bright'>
                                        Visit the Repo
                                    </a>
                                </li>

                                {projectFeature.deployed &&    
                                    <li>
                                        <a href={projectFeature.deployed} 
                                        className='hover:pb-1 hover:underline hover:text-bright'>
                                            Live Page
                                        </a>
                                    </li>
                                }
                                {projectFeature.tech && 
                                    <ul className='flex flex-wrap justify-evenly mt-12 mx-3'>{
                                        projectFeature.tech.map((each) => 
                                            <li key={each} className='font-body text-xs italic content-end'>{each}</li>
                                        )
                                    }</ul>
                                }
                            </ul>
                        </div>

                    ) : (<></>)}      

                </article>
        </div>
    )
};