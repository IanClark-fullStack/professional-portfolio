import BrowserContainerNavbar from './BrowserContainerNavbar';
import BrowserContainerWindow from './BrowserContainerWindow';

export default function BrowserContainer() {
    return (
        <div id='projectHover' className='mt-4 bg-blue border-2 border-bright ml-5'>
            <article className='mx-auto bg-white border-2 border-blue transform -translate-x-4 -translate-y-6'>
                <BrowserContainerNavbar />
                <BrowserContainerWindow />
            </article>
        </div>
    )
};