import PopShape from './PopShape';
import Info from './Info';
export default function About(){
    return (
        <section className='flex my-24 md:my-44'>
            <article className='flex-row md:py-44'>
                <h2 className='font-display text-6xl md:text-8xl md:mx-auto ml-8 mb-4'>About</h2>
                <PopShape />
                <Info />
            </article>
        </section>
    )
};