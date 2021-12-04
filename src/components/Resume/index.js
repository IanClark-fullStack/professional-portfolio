import ResumeForm from './ResumeForm';

export default function Resume() {
    return (
        <section className='container py-10 pb-10 pr-2 mx-auto'>
            <h2 className='font-display text-left text-6xl md:text-8xl md:mx-auto ml-8 pb-2 md:pb-4'>Resume</h2>
            <div id='formContainer' className='mt-4 bg-blue border-2 border-bright ml-2 md:ml-5'>
                <article className='mx-auto bg-white border-2 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                    {/* Browser Container Navbar  */}
                    <div className='h-5 border-b border-indigo-900 bg-cover bg-center items-center p2 text-xs text-white mb-3'>
                        <p className='ml-1 text-left'>x _</p>
                    </div>
                    {/* Browser Container Window Space */}
                    <div className='flex justify-center items-center py-3'>
                        <ResumeForm />
                    </div>                
                </article>
            </div>
        </section>
    )
};