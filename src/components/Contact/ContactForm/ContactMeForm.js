import { useState } from 'react';
import { send } from 'emailjs-com';
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
            border: '2px solid rgba(243, 110, 240)', 
            height: '40px',
            margin: '16px 38px',
            fontSize: '22px',
            overflow: 'hidden'
        }, 
        boxFocus: {
            boxShadow: '4px 4px 0 rgba(41, 26, 235)', 
            border: '2px solid rgba(41, 26, 235)', 
            height: '40px',
            margin: '16px 38px',
            fontSize: '22px',
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
        <form id='myForm' className='w-8/12' onSubmit={handleFormSubmit}> 
            <h5>Drop me a line</h5>
            <div className='w-1/3' style={hasFocus ? styles.boxFocus : styles.box}> 
                <input 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    className='focus:outline-none pl-2'
                    type='text' 
                    name='contact_email'
                    placeholder='Your email'
                    id='contact_email'
                    value={toSend.contact_email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-1/3' style={hasFocus2 ? styles.boxFocus : styles.box}>   
                <input 
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    className='focus:outline-none pl-2'
                    type='text' 
                    name='contact_name'
                    placeholder='Your name'
                    id='contact_name' 
                    value={toSend.contact_name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-2/3' style={hasFocus3 ? styles.boxFocus : styles.box}>
                <textarea 
                    onFocus={() => setFocus3(true)}
                    onBlur={() => setFocus3(false)}
                    className='focus:outline-none pl-2'
                    type='text' 
                    name='message'
                    id='message' 
                    placeholder='message'
                    value={toSend.message}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-row-reverse'>
                {hasHover ?(
                    <img src={macPrint} />
                ) : <></>
                }
                <button 
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    className='font-display text-sm' 
                    type='submit' 
                    value='send'>Send yourself a copy
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
