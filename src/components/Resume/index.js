import ResumeForm from './ResumeForm';
import Mail from '../../images/Mail.png';
export default function Resume() {
    return (
        <section className='w-10/12 md:w-5/12 items-center my-4 md:my-0 mx-auto md:mx-0'>
            <h2 className='font-display text-center text-6xl md:text-7xl md:mx-auto pb-2 md:py-8'>Resume</h2>
            <div id='formContainer' className='mt-4 bg-blue border-4 border-blue mx-none'>
                <article className='mx-auto bg-white border-4 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                    {/* Browser Container Navbar  */}
                    <div className='h-5 md:h-8 border-b-2 bg-gradient-to-r from-pink-300 border-blue p2 text-xs text-left mb-3'>
                        <p className='ml-1 bg-white text-bright px-1 border border-bright rounded-full mx-1 inline-block text-left'>x</p>
                        <p className='bg-white text-bright px-1 border border-bright rounded-full inline-block text-left'>-</p>
                        <h5 className='ml-2 font-display inline-block text-lg text-white'>Grab a copy of my resume below</h5>
                       
                    </div>
                    {/* Browser Container Window Space */}
                    <div className='px-4 py-2 m-2'>
                        <ResumeForm />
                    </div>                
                </article>
            </div>
        </section>
    )
};