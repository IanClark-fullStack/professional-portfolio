
import { useState } from 'react';


export default function FeaturedProjects({ projectsProp }) {
    // Haha just ask your tutor! 
    const [projectHover, setProjectHover] = useState(false);

    

    const replaceImageBackground = 'mx-auto h-44 lg:h-60 bg-blue border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3';

    return (     
    <>
        {projectsProp.map((project, index) =>
            <div className='md:flex md:flex-row justify-evenly md:items-center pt-2 md:pt-8 md:pb-16'>
                <div className='w-11/12 md:w-5/12 md:hidden items-center mx-auto md:mx-0'>
                    <p className='font-display my-4 md:my-2 px-4 mx-1 md:mx-0 bg-blue text-white md:text-lg block md:hidden'>{project.summary}</p>
                </div>
                <div className='w-10/12 md:w-5/12 items-center my-4 md:my-0 mx-auto md:mx-0'>
                            
                    <div
                        onMouseEnter={() => setProjectHover(true)} 
                        onMouseLeave={() => setProjectHover(false)}
                        className={projectHover ? 'bg-bright border-2 border-blue ml-5' 
                        : 'border-blue bg-bright border-2 ml-5'}>

                            <article className={projectHover ? replaceImageBackground : project.offHover}>
                                
                                {projectHover ?(
                                    <>
                                        <div id='info1' className='font-display mt-4'>
                                            <h4 id='project-title' className='text-white text-md md:text-3xl lg:text-4xl text-center'>    
                                                {project.name}
                                            </h4>
                                            <ul id='project-links' className='pt-2 items-center content-center text-white text-center text-md lg:text-2xl'>
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

                <div id='project-info' className='md:flex md:flex-col w-10/12 md:w-5/12 text-left md:my-2 mx-auto md:mx-0'>
                    <p className='font-display my-6 md:my-2 p-2 mx-1 md:mx-0 bg-blue text-white md:text-lg md:block hidden'>{project.summary}</p>

                    {project.desc.map((line, index) => 
                        <p key={index} className='font-display mx-2 md:mx-0 py-1 md:p-2'>
                            {line}
                        </p> 
                    )}

                    <ul className='mt-2 md:mx-3 md:mt-6'>
                        {project.tech.map((techEl, index) => 
                            <li key={index} className='font-body text-left px-6 mt-1 md:mt-2 ml-2 md:ml-4 text-xs md:text-sm inline-block bg-blue text-white'>
                                {`${techEl}`}
                            </li>
                        )}
                    </ul>
                </div>
    
            </div> 

        )}
    </>

)};