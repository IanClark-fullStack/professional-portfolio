export default function Info() {
    return (
        <>
            <div className='flex flex-col md:flex items-center py-3 my-6 md:mx-32 lg:mx-60'>
                <div className='bg-blue w-1/2 md:w-3/12 lg:w-2/12 border-2 border-bright md:mr-2'>
                    <article className='mx-auto h-24 md:h-36 bg-profile-MacOS bg-cover bg-center bg-no-repeat border-2 border-blue transform -translate-x-1 -translate-y-2 md:-translate-x-2 md:-translate-y-3'>
                        <div className='h-3 md:h-4 bg-blue bg-browser-pattern bg-cover bg-center items-center p2 text-xs text-white'><p className='text-xs md:text-md text-left ml-1'>X _</p></div>
                    </article>
                </div>

                <div className='font-display justify-center leading-normal md:leading-loose w-full lg:ml-24 p-4 text-black text-left text-sm md:text-md flex flex-col lg:w-5/12'>
                    <p>Hi, my name is Ian. In high school, I was really into the idea of being a graffiti artist. I painted in my room and did wheat-pastes about town. A few years later, I realized I was really just into design and creative problem solving.</p>

                    <p className='mt-4 md:mt-10'>Currently, I am a full stack developer and recent graduate from Northwestern University, looking to expand my professional experience as a Full Stack Developer within a fast-paced and quality driven company culture.
                    </p>

                    <p className='mt-4 md:mt-10'>I’m currently enjoying working with React, Express, Node, NoSQL, GraphQL and RESTful API architectures. For more information, grab a copy of my resume below.</p>
                    
                </div>
                
            </div>
        </>
    )
}