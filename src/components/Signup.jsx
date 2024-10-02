import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import facebook from '../images/facebook.png';
import google from '../images/google.webp';
import mail from '../images/mail.jpg';
import mobile from '../images/moblie.jpeg';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/setup';

interface signProps {
    setSign?: any;
}

const Signup = (props: signProps) => {
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otp, setOtp] = useState("");

    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    };

    // Initialize reCAPTCHA and send OTP
    const sendOtp = async () => {
        try {
            const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                size: 'invisible', // Change to 'normal' if you want visible captcha
                callback: (response: any) => {
                    console.log("Captcha resolved", response);
                }
            }, auth);

            const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
            setConfirmationResult(confirmation);  // Save the confirmation result for OTP verification
            console.log("OTP sent");
        } catch (error) {
            console.log(error);
        }
    };

    // Verify the OTP
    const verifyOtp = async () => {
        try {
            if (confirmationResult) {
                await confirmationResult.confirm(otp);
                console.log("Phone number verified successfully");
            }
        } catch (error) {
            console.log("OTP verification failed", error);
        }
    };

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-stone-800 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
                            <h1 onClick={() => props.setSign(false)} className='cursor-pointer'>X</h1>
                            <h3 className="ml-36 text-base font-bold leading-6 text-gray-900" id="modal-title">Log in / Sign Up</h3>
                        </div>
                        <hr />
                        <h1 className='mt-4 font-semibold text-2xl ml-5'>Welcome To Airbnb Clone</h1>

                        {email ? (
                            <>
                                <input
                                    type="email"
                                    className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 w-11/12 p-2.5 outline-none"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="password"
                                    className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 w-11/12 p-2.5 outline-none"
                                    placeholder="Password"
                                    required
                                />
                            </>
                        ) : (
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={(value) => setPhone(value)}  // Properly set phone state
                                placeholder='Phone number'
                                inputStyle={{ width: '453px', height: "50px", fontSize: "17px" }}
                                containerStyle={{ marginTop: "15px", marginLeft: "20px" }}
                            />
                        )}

                        <div id='recaptcha-container'></div> {/* Render reCAPTCHA here */}

                        {phone && (
                            <button onClick={sendOtp} className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 mt-3 rounded w-11/12">
                                Send OTP
                            </button>
                        )}

                        {confirmationResult && (
                            <>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}  // Capture OTP input
                                    className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg border-black h-12 mt-4 w-11/12 p-2.5 outline-none"
                                    placeholder="Enter OTP"
                                    required
                                />
                                <button onClick={verifyOtp} className="ml-5 bg-rose-600 h-12 text-white font-bold py-2 px-4 mt-3 rounded w-11/12">
                                    Verify OTP
                                </button>
                            </>
                        )}

                        <h1 className='text-xs ml-5 mt-3'>
                            We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy.
                        </h1>

                        <h1 className='text-center mt-3'>or</h1>

                        <div onClick={googleSignin} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4 p-3 flex items-center border border-spacing-1 rounded-lg border-black'>
                            <img src={google} className='w-6 h-6 ml-3' alt="Google" />
                            <h1 className='ml-24'>Continue with Google</h1>
                        </div>

                        <div
                            onClick={() => setEmail(!email)}  // Toggle between email and phone state
                            className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 mt-4 p-3 flex items-center border border-spacing-1 rounded-lg border-black'
                        >
                            <img src={email ? mobile : mail} className='w-6 h-6 ml-3' alt={email ? "Mobile" : "Email"} />
                            <h1 className='ml-24'>{email ? 'Continue with Phone' : 'Continue with Email'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
