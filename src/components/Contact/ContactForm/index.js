import ContactMeForm from './ContactMeForm';

export default function ContactFormContainer() {
    return (
        <div id='formContainer' className='mt-4 bg-blue border-2 border-bright mx-none'>
            <article className='mx-auto bg-white border-2 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                {/* Browser Container Navbar  */}
                <div className='h-5 border-b border-indigo-900 bg-cover bg-center items-center p2 text-xs text-white mb-3'>
                    <p className='ml-1 text-left'>x _</p>
                </div>
                {/* Browser Container Window Space */}
                <div className='px-4 py-2 m-2 h-60 md:h-96'>
                    <ContactMeForm />
                </div>                
            </article>
        </div>
    )
};