import React, { useState } from 'react';
import Airbnb from '../images/Airbnb.png';
import search from '../images/search.png';
import menu from '../images/menu.png';
import user from '../images/user.png';
import Signup from './Signup';
import Login from './Login';

const Navbar = () => {
    const [popUp, setPopUp] = useState(false);
    const [sign, setSign] = useState(false);
    const [log, setLog] = useState(false);

    return (
        <div className='flex items-center p-3 border-b border-gray-300'>
            <img src={Airbnb} className="w-24 h-8 ml-10" alt="Airbnb Logo" />
            <div className='ml-auto flex items-center rounded-3xl border border-gray-300 p-2 shadow-lg h-12'>
                <input type="text" className="text-gray-900 text-sm rounded-3xl w-24 p-2.5 outline-none" placeholder="Add place" required />
                <span className="mx-1">|</span>
                <input type="text" className="text-gray-900 text-sm rounded-3xl w-24 p-2.5 outline-none" placeholder="Add Date" required />
                <span className="mx-1">|</span>
                <input type="text" className="text-gray-900 text-sm rounded-3xl w-24 p-2.5 outline-none" placeholder="Add Guests" required />
                <img src={search} className='w-8 h-8 cursor-pointer' alt="Search" />
            </div>
            <div 
                onClick={() => setPopUp(!popUp)} 
                className='cursor-pointer flex items-center border border-gray-300 rounded-full p-2 ml-8 relative'
            >
                {popUp && (
                    <div className='shadow-xl h-28 w-28 z-10 absolute bg-white mt-12 p-1'>
                        <h1 
                            onClick={() => { setSign(true); setPopUp(false); }} 
                            className='font-semibold text-sm cursor-pointer hover:text-blue-600'
                        >
                            Sign up
                        </h1>
                        <hr className='mt-2' />
                        <h1 
                            onClick={() => { setLog(true); setPopUp(false); }} 
                            className='font-thin text-sm cursor-pointer hover:text-blue-600'
                        >
                            Login
                        </h1>
                    </div>
                )}
                <img src={menu} className='w-6 h-6' alt="Menu" />
                <img src={user} className='w-8 h-8 ml-3' alt="User" />
            </div>
            {sign && <Signup setSign={setSign} />}
            {log && <Login setLog={setLog} />}
        </div>
    );
};

export default Navbar;
