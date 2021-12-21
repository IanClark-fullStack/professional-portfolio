import { useState } from 'react';


export default function FeaturedProject2({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    const imageBackground = 'bg-budget-tracker bg-no-repeat bg-cover bg-center mx-auto h-28 md:h-44 border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    const replaceImageBackground = 'mx-auto h-28 md:h-44 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
    
    return (
        <div
            onMouseEnter={() => setProjectHover(true)} 
            onMouseLeave={() => setProjectHover(false)}
            className={projectHover ? 'w-3/5 max-w-xs bg-bright border-2 border-blue ml-5' 
            : 'w-3/5 max-w-xs bg-blue border-2 border-bright ml-5'}>
                <article className={projectHover ? replaceImageBackground : imageBackground}>

                


                    {projectHover ?(
                        <div id='info1' className='font-display mt-4'>
                            <h4 id="project-title" className='text-white text-md md:text-3xl text-center'>    
                                {projectsProp.project2.name}
                            </h4>

                            <ul id="project-links" className='pt-2 content-center text-white text-center'>

                                {projectsProp.project2.deployed &&    
                                    <li><a href={projectsProp.project2.deployed} className='hover:pb-1 hover:underline hover:text-bright'>Live Page</a></li>
                                }

                                <li><a href={projectsProp.project2.repo} className='hover:pb-1 hover:underline hover:text-bright'>Visit the Repo</a></li>
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