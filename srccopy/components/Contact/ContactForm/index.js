import ContactMeForm from './ContactMeForm';

export default function ContactFormContainer() {
    return (
        <div id='formContainer' className='mt-4 bg-blue border-4 border-blue mx-none'>
            <article className='mx-auto bg-white border-4 border-blue transform -translate-x-2 -translate-y-3 md:-translate-x-4 md:-translate-y-6'>
                {/* Browser Container Navbar  */}
                <div className='h-6 md:h-8 border-b-2 bg-gradient-to-r from-pink-300 border-blue p2 text-xs text-left flex items-center mb-3'>
                    <p className='ml-1 bg-white text-bright px-1 border border-bright rounded-full mx-1 inline-block text-left'>x</p>
                    <p className='bg-white text-bright px-1 border border-bright rounded-full inline-block text-left'>-</p>
                </div>
                {/* Browser Container Window Space */}
                <div className='px-4 py-2 m-2'>
                    <ContactMeForm />
                </div>                
            </article>
        </div>
    )
};