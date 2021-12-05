export default function Info() {
    return (
        <>
            <div className='md:flex w-9/12 justify-center items-center py-3 my-6 md:mr-8'>
                <div className='mx-auto md:w-3/12 bg-blue border-2 border-bright md:mr-8'>
                    <article className='mx-auto h-24 md:h-28 bg-profile-MacOS bg-cover bg-center bg-no-repeat border-2 border-blue transform -translate-x-2 -translate-y-3'>
                        <div className='h-4 bg-blue bg-browser-pattern bg-cover bg-center items-center p2 text-xs text-white'><p className='text-left ml-1'>X _</p></div>
                    </article>
                </div>

                <div className='font-display text-left leading-loose hidden flex-col w-1/2 p-4 text-black text-lg md:flex'>
                    Hi, my name is Ian. In high school, I was really into the idea of being a graffiti artist. I painted in my room and did wheat-pastes about town. A few years later, I realized I was really just into design and creative problem solving. These days, you can find me at Northwestern Universities Full Stack Web Development Bootcamp, focused on learning and improving programming languages.
                </div>
                    
                    
                <div className='font-display text-left leading-relaxed mx-3 flex flex-col md:flex-row w-1/2 p-4 text-black md:hidden'>
                    Hi, my name is Ian. In high school, I was really into the idea of being a graffiti artist. I painted in my room and did wheat-pastes about town. A few years later, I realized I was really just into design and creative problem solving. These days, you can find me at Northwestern Universities Full Stack Web Development Bootcamp, focused on learning and improving programming languages.
                </div>
            </div>
        </>
    )
}