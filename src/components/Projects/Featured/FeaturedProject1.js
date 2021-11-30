
import { useState } from 'react';


export default function FeaturedProject1({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    const imageBackground = 'mx-auto h-28 md:h-44 bg-cover bg-center bg-muskyTweets-pattern bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3';

    const replaceImageBackground = 'mx-auto h-28 md:h-44 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-3';

    return (
        <div
            onMouseEnter={() => setProjectHover(true)} 
            onMouseLeave={() => setProjectHover(false)}
            className={projectHover ? 'w-3/5 bg-blue border-2 border-bright ml-5' 
            : 'w-3/5 border-2 border-bright ml-5'}>
                <article className={projectHover ? replaceImageBackground : imageBackground}>
                    {projectHover ? 
                        (
                            <div id='info1' className='itemsCenter'>
                                <h4 id="project-title" className="text-bright text-md text-center">    
                                    {projectsProp.project1.name}
                                </h4>

                                <ul id="project-links" className='text-white text-center'>
                                    <li><a href={projectsProp.project1.deployed} className='hover:pb-1 hover:underline'>Live Page</a></li>
                                    <li><a href={projectsProp.project1.repo} className='hover:pb-1 hover:underline'>Visit the Repo</a></li>
                                </ul>
                            </div>
                        
                        ) : (
                            <div></div>

                        )
                    }
                </article>
            
        </div>
    )
};