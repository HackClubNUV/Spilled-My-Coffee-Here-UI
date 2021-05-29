import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
        if (!accessToken) {
            console.log('access token not found');
        }
        else {
            axios.get('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${tokenType} ${accessToken}`,
                },
            })
            .then(result => {
                console.log('result', result.data);
                console.log('img', 'https://cdn.discordapp.com/avatars/' + result.data.id +'/'+ result.data.avatar);
            })
            .catch(console.error);
        }
    }, []);
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black
        relative shadow-sm font-mono' role='navigation'>
           <Link to='/' className="pl-8">
               Hack Club
            </Link>
            {/* <div className="pbnx-4 cursor-pointer md:hidden">
                <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path 
                    fillRule="evenodd" 
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                    clipRule="evenodd" 
                   />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to='/'>Home</Link>
                <Link className="p-4" to='/'>About</Link>
                <Link className="p-4" to='/'>Leaderboard</Link>
            </div> */}
            <button><a
                href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FSpilled-My-Coffee-Here-UI&response_type=token&scope=identify`}>Auth</a></button>
        </nav>
    )
}

export default Navbar
