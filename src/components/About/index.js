import PopShape from './PopShape';
import Info from './Info';
export default function About(){
    return (
        <section className='flex my-4 lg:mx-auto'>
            <article className='flex-row md:py-12'>
                <h2 className='font-display text-6xl text-center md:text-8xl lg:mt-60 lg:mb-12 md:ml-8'>About</h2>
                <PopShape />
                <Info />
            </article>
        </section>
    )
};