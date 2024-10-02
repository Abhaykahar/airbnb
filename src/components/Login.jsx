import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import facebook from '../images/facebook.png';
import google from '../images/google.webp';
import mail from '../images/mail.jpg';
import mobile from '../images/moblie.jpeg';
import { signInWithPopup } from 'firebase/auth';  // Import signInWithPopup
import { auth, googleProvider } from '../firebase/setup';  // Import auth and provider

interface signProps {
    setSign?: any;
}

const Signup = (props: signProps) => {
    const [email, setEmail] = useState(false);

    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);  // Use auth and provider properly
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Modal content goes here */}
            <div onClick={googleSignin} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4  p-3 flex items-center border border-spacing-1 rounded-lg border-black'>
                <img src={google} className='w-6 h-6 ml-3' alt="Google" />
                <h1 className='ml-24'>Continue with Google</h1>
            </div>
        </div>
    );
};

export default Signup;
