import PopShape from './PopShape';
import Info from './Info';
export default function About(){
    return (
        <section className='flex my-24'>
            <article className='flex-row md:py-12'>
                <h2 className='font-display text-6xl text-center md:text-8xl ml-8 md:mb-14'>About</h2>
                <PopShape />
                <Info />
            </article>
        </section>
    )
};