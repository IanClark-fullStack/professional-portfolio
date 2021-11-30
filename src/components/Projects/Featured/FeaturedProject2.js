import { useState } from 'react';


export default function FeaturedProject2({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    const imageBackground = 'mx-auto h-28 md:h-56 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';
    
    const replaceImageBackground = 'mx-auto h-28 md:h-56 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    return (
        <div
            onMouseEnter={() => setProjectHover(true)} 
            onMouseLeave={() => setProjectHover(false)}
            className={projectHover ? 'w-2/5 bg-blue border-2 border-bright' 
            : 'w-2/5 bg-bright border-2 border-blue'}>
                <article className={projectHover ? replaceImageBackground : imageBackground}>
                    
                    {projectHover ?(
                        <div id='info1' className='itemsCenter mt-4 font-display'>
                            <h4 id="project-title" className="text-bright text-md text-center">    
                                {projectsProp.project2.name}
                            </h4>

                            <ul id="project-links" className='text-white text-center'>
                                <li><a href={projectsProp.project2.deployed} className='hover:pb-1 hover:underline'>Live Page</a></li>
                                <li><a href={projectsProp.project2.repo} className='hover:pb-1 hover:underline'>Visit the Repo</a></li>
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