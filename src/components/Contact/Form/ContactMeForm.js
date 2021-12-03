import { useState } from 'react';
import { send } from 'emailjs-com';
import macPrint from '../assets/mac-print.png'
// import { checkPassword, validateEmail } from './helpers/auth';

export default function ConctactMeForm() {
    const [hasFocus, setFocus] = useState(false);
    const [hasFocus2, setFocus2] = useState(false);
    const [hasHover, setHover] = useState(false);

    const boxOff = 'h-28 md:h-44 bg-bright border-2 border-blue transform -translate-x-2 -translate-y-2 md:-translate-x-2 md:-translate-y-3 hover:bg-blue hover:border-bright';
    const styles = {
        box: {
            // boxShadow: '4px 4px 0 rgba(243, 110, 240)', 
        
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
    const [toSend, setToSend] = useState({
        user_email: '',
        user_name: '',
        message: '',
    });
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        send(
            'service_d0rdrpw',
            'template_nvhlb7n',
            toSend, 
            'user_f68WX13eeMq2KKSwJdgPj'
        ) .then((res) => {
            console.log('SENT', res.status, res.text);
        }) .catch((err) => {
            console.log('Failure to send', err);
        });
    }
    const handleInputChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value });
    };
        // const [email, setEmail] = useState('');
        // const [userName, setUserName] = useState('');
        // const [errorMessage, setErrorMessage] = useState('');
        // const form = useRef();

        // const handleInputChange = (e) => {
        //     // Getting the value and name of the input which triggered the change
        //     const { target } = e;
        //     const inputType = target.name;
        //     const inputValue = target.value;

        //     // Based on the input type, we set the state of either email, username, and password
        //     if (inputType === 'email') {
        //         setEmail(inputValue);
        //     } else if (inputType === 'userName') {
        //         setUserName(inputValue);
        //     }
        // };
        // // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        // if (!validateEmail(email) || !userName) {
        //     setErrorMessage('Email or username is invalid');
        //     // We want to exit out of this code block if something is wrong so that the user can correct it
        //     return;
        //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        // }

        
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        // setUserName('');
        
        // setEmail('');
    

    return (
        <form id='myForm' className='w-full' onSubmit={handleFormSubmit}> 
            <h5>Grab a copy of my resume below</h5>
            <div className='w-2/3' style={hasFocus ? styles.boxFocus : styles.box}> 
                <input 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    className='focus:outline-none pl-2'
                    type='text' 
                    name='user_email'
                    placeholder='Your email'
                    id='user_email'
                    value={toSend.user_email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-1/3' style={hasFocus2 ? styles.boxFocus : styles.box}>   
                <input 
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    className='focus:outline-none pl-2'
                    type='text' 
                    name='user_name'
                    placeholder='Your name'
                    id='user_name' 
                    value={toSend.user_name}
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
    )
};
