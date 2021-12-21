import { useState } from 'react';
import { send } from 'emailjs-com';
import Mail from '../../images/Mail.png';
import macPrint from './assets/mac-print.png'
import { validateEmail } from './helpers/auth';

export default function ResumeForm() {
    const [hasFocus, setFocus] = useState(false);
    const [hasFocus2, setFocus2] = useState(false);
    const [hasHover, setHover] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [toSend, setToSend] = useState({
        user_email: '',
        user_name: '',
        message: '',
    });

    const boxOff = 'h-28 md:h-44 bg-bright border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3 hover:bg-blue hover:border-bright';
    
    const styles = {
        box: {
            boxShadow: '4px 4px 0 rgba(41, 26, 235)', 
            border: '2px solid rgba(41, 26, 235)',  
            overflow: 'hidden'
        }, 
        boxFocus: {
            boxShadow: '4px 4px 0 rgba(243, 110, 240)', 
            border: '2px solid rgba(243, 110, 240)', 
            overflow: 'hidden'
        }
    }
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'user_email') {
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
            process.env.REACT_APP_TEMPLATE_ID1,
            toSend, 
            process.env.REACT_APP_USER_ID
        ) .then((res) => {
            console.log('SENT', res.status, res.text);
        }) .catch((err) => {
            console.log('Failure to send', err);
        });
    };

    return (
        <>
        <form id='myForm' className='flex flex-col items-center' onSubmit={handleFormSubmit}> 
            <h2 className='font-display text-center md:mx-auto pb-2 md:pb-4'>Grab a Copy Below</h2>
            
            <div className='h-12 mt-5' style={hasFocus ? styles.boxFocus : styles.box}> 
                <input 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    className='focus:outline-none w-full font-display text-xl mx-4 my-2 placeholder:text-gray-300 text-blue'
                    type='text' 
                    name='user_email'
                    placeholder='Your email'
                    id='user_email'
                    value={toSend.user_email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='h-12 mt-10' style={hasFocus2 ? styles.boxFocus : styles.box}>   
                <input 
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    className='focus:outline-none w-full font-display text-xl mx-4 my-2 placeholder:text-gray-300 text-blue'
                    type='text' 
                    name='user_name'
                    placeholder='Your name'
                    id='user_name' 
                    value={toSend.user_name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-row-reverse w-full text-right'>
                <button 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    className='font-display py-2 px-9 bg-gradient-to-r from-pink-300 to-pink-50 border-bright border text-pink-500 hover:text-bright text-md mt-12' 
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