
import { useState } from 'react';


export default function FeaturedProjects({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    const imageBackground = 'mx-auto h-28 md:h-44 bg-cover bg-center bg-fitness-tracker bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    const replaceImageBackground = 'mx-auto h-28 md:h-44 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    return (     
    <>
        {projectsProp.map((project, index) =>
            <div className='flex justify-evenly  items-center py-8'>
                <div className='w-5/12 items-center'>        
                    <div
                        onMouseEnter={() => setProjectHover(true)} 
                        onMouseLeave={() => setProjectHover(false)}
                        className={projectHover ? 'bg-bright border-2 border-blue ml-5' 
                        : 'bg-blue border-2 border-bright ml-5'}>

                            <article className={projectHover ? replaceImageBackground : imageBackground}>
                                
                                {projectHover ?(
                                    <>
                                        <div id='info1' className='font-display mt-4'>
                                            <h4 id='project-title' className='text-white text-md md:text-3xl text-center'>    
                                                {project.name}
                                            </h4>
                                            <ul id='project-links' className='pt-2 justify-items-center content-center text-white text-center text-md'>
                                                <li><a href={project.deployed} className='mt-4 hover:pb-1 hover:underline hover:text-bright'>Live Page</a></li>
                                                <li><a href={project.repo} className='mt-4 hover:pb-1 hover:underline hover:text-bright'>Visit the Repo</a></li>
                                            </ul>
                                        </div>
                                    </>
                                )
                                : <></>
                                }
                            </article>
                    </div>
                </div>

                <div id='project-info' className='flex flex-col w-5/12 text-left my-2'>
                    <p className='font-display my-2 p-2 bg-blue text-white text-lg'>{project.summary}</p>

                    {project.desc.map((line, index) => 
                        <p key={index} className='font-display p-2'>
                            {line}
                        </p> 
                    )}

                    <ul className='mt-6'>
                        {project.tech.map((techEl, index) => 
                            <li key={index} className='font-body text-left ml-4 text-sm inline-block bg-blue text-white px-1'>
                                {`${techEl}`}
                            </li>
                        )}
                    </ul>
                </div>
    
            </div> 

        )}
    </>

)};