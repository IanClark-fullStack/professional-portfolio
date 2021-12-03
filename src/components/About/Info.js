export default function Info() {
    return (
        <>
            <div className='flex justify-center items-center py-3 my-6'>
                <div className='w-3/4 md:w-3/12 bg-blue border-2 border-bright ml-5 md:mr-8'>
                    <article className='mx-auto h-40 md:h-44 bg-profile-MacOS bg-cover bg-center bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3'>
                        <div className='h-7 md:h-9 bg-blue bg-browser-pattern bg-cover bg-center items-center p2 text-xs text-white'><p className='ml-1'>X _</p></div>
                    </article>
                </div>
                <div className='font-display text-left hidden flex-col md:flex-row md:w-4/12 p-4 text-blue text-lg md:flex'>
                    Hi, my name is Ian. In high school, I was really into the idea of being a graffiti artist. I painted in my room and did wheat-pastes about town. A few years later, I realized I was really just into design and creative problem solving. These days, you can find me at Northwestern Universities Full Stack Web Development Bootcamp, focused on learning and improving programming languages.
                </div>
                    
                    
                <div className='font-display text-left flex flex-col md:flex-row md:w-3/12 p-4 text-blue md:hidden'>
                    Hi, my name is Ian. In high school, I was really into the idea of being a graffiti artist. I painted in my room and did wheat-pastes about town. A few years later, I realized I was really just into design and creative problem solving. These days, you can find me at Northwestern Universities Full Stack Web Development Bootcamp, focused on learning and improving programming languages.
                </div>
            </div>
        </>
    )
}