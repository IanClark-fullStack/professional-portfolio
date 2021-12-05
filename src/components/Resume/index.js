import ResumeForm from './ResumeForm';

export default function Resume() {
    return (
        <section className='py-10 md:py-48 pb-10 pr-2 mx-auto md:w-11/12 lg:w-8/12'>
            <h2 className='font-display text-center text-6xl md:text-8xl md:mx-auto ml-8 pb-2 md:pb-24'>Resume</h2>
            <div id='formContainer' className='mt-4 bg-blue border-2 border-bright ml-2 md:ml-5'>
                <article className='x-auto bg-white border-2 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                    {/* Browser Container Navbar  */}
                    <div className='h-5 border-b border-indigo-900 bg-cover bg-center items-center p2 text-xs text-white mb-3'>
                        <p className='ml-1 text-left'>x _</p>
                    </div>
                    {/* Browser Container Window Space */}
                    <div className='flex justify-center items-center py-8'>
                        <ResumeForm />
                    </div>                
                </article>
            </div>
        </section>
    )
};