import { useState } from 'react';


export default function FeaturedProject3({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    const imageBackground = 'mx-auto h-28 md:h-56 bg-cover bg-center bg-spotify-api bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
    
    const replaceImageBackground = 'mx-auto h-28 md:h-56 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    return (
        <div
            onMouseEnter={() => setProjectHover(true)} 
            onMouseLeave={() => setProjectHover(false)}
            className={projectHover ? 'w-3/5 max-w-xs bg-bright border-2 border-blue ml-5' 
            : 'w-3/5 max-w-xs bg-blue border-2 border-bright ml-5'}>
                <article className={projectHover ? replaceImageBackground : imageBackground}>
                    
                    {projectHover ?(
                        <div id='info1' className='items-center mt-5 md:mt-8 font-display'>
                            <h4 id="project-title" className="text-white text-md md:text-3xl text-center">    
                                {projectsProp.project3.name}
                            </h4>

                            <ul id="project-links" className='text-white text-center text-sm md:text-xl md:mt-6 hover:pb-1 hover:underline'>
                                <li><a href={projectsProp.project3.deployed} className='hover:pb-1 hover:underline hover:text-bright'>Live Page</a></li>
                                <li><a href={projectsProp.project3.repo} className='hover:pb-1 hover:underline hover:text-bright'>Visit the Repo</a></li>
                            </ul>
                        </div>)
                    : (
                        <div>
                            


                        </div>
                        )
                    }

                </article>
        </div>
    )
};