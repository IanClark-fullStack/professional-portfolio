import { useState } from 'react';
import { send } from 'emailjs-com';
import Mail from '../../../images/Mail.png';
import macPrint from '../assets/mac-print.png'
import { validateEmail } from './helpers/auth';



export default function ConctactMeForm() {
    const [hasFocus, setFocus] = useState(false);
    const [hasFocus2, setFocus2] = useState(false);
    const [hasFocus3, setFocus3] = useState(false);
    const [hasHover, setHover] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [toSend, setToSend] = useState({
        contact_email: '',
        contact_name: '',
        message: '',
    });
    
    const styles = {
        box: {        
            boxShadow: '4px 4px 0 rgba(41, 26, 235)', 
            border: '2px solid rgba(41, 26, 235)', 
            // height: '40px',
            // margin: '16px 0px',
            overflow: 'hidden'
        }, 
        boxFocus: {
            boxShadow: '4px 4px 0 rgba(243, 110, 240)',
            border: '2px solid rgba(243, 110, 240)', 
            // height: '40px',
            // margin: '16px 0px',
            overflow: 'hidden'
        }
    }
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'contact_email') {
            // Change state of email 
            setEmail(inputValue);
        } else {
            setName(inputValue);
        }
        // Getting Email data ready by state change for Sending Email w/ values
        setToSend({...toSend, [inputType]: inputValue });
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // Validate Email and Name 
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name incorrect');
            return;
        };
        // In every other case, send the email. 
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID2,
            toSend, 
            process.env.REACT_APP_USER_ID, 
        ) .then((res) => {
            console.log('SENT', res.status, res.text);
        }) .catch((err) => {
            console.log('Failure to send', err);
        });
    };

    return (
        <>
        <form id='myForm' className='flex flex-col items-center' onSubmit={handleFormSubmit}> 
           
            <div className='h-12 mt-5' style={hasFocus ? styles.boxFocus : styles.box}> 
                <input 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    className='focus:outline-none w-full font-display text-xl mx-4 my-2 placeholder:text-gray-300 text-blue'
                    type='text' 
                    name='contact_email'
                    placeholder='Your email'
                    id='contact_email'
                    value={toSend.contact_email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='h-12 mt-10' style={hasFocus2 ? styles.boxFocus : styles.box}>   
                <input 
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    className='focus:outline-none w-full font-display text-xl mx-4 my-2 placeholder:text-gray-300 text-blue'
                    type='text' 
                    name='contact_name'
                    placeholder='Your name'
                    id='contact_name' 
                    value={toSend.contact_name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='h-15 mt-10' style={hasFocus3 ? styles.boxFocus : styles.box}>
                <textarea 
                    onFocus={() => setFocus3(true)}
                    onBlur={() => setFocus3(false)}
                    className='focus:outline-none w-full font-display text-xl mx-4 my-2 placeholder:text-gray-300 text-blue'
                    type='text' 
                    name='message'
                    id='message' 
                    placeholder='message'
                    value={toSend.message}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-row-reverse w-full text-right'>
               
                <button 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    className='font-display py-2 px-9 bg-gradient-to-r from-pink-300 border-bright border text-white hover:text-bright text-md mt-12' 
                    type='submit' 
                    value='send'><img src={Mail} />SEND
                </button>
            </div>
        </form>
        {errorMessage && (
            <>
                <p id='inCaseError'>{errorMessage}</p>
            </>
        )}
        </>
    )
};
