import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
    const { darkTheme, toggleTheme } = useTheme();

    // Apply theme to the body
    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? '#282828' : '#ffffff';
        document.body.style.color = darkTheme ? '#ffffff' : '#000000';
    }, [darkTheme]);

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: darkTheme ? '#181818' : '#f5f5f5',
        }}>
            <div style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        fill="#FF0000">
                        <path d="M19.7 29.2L29.6 24l-9.9-5.2v10.4zM24 6C13.5 6 6 13.5 6 24s7.5 18 18 18 18-7.5 18-18S34.5 6 24 6zm0 32c-7.7 0-14-6.3-14-14S16.3 10 24 10s14 6.3 14 14-6.3 14-14 14z"/>
                    </svg>
                </a>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
                <li>
                    <a 
                        href="/" 
                        style={{ 
                            color: darkTheme ? '#f5f5f5' : '#282828', 
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="/about" 
                        style={{ 
                            color: darkTheme ? '#f5f5f5' : '#282828', 
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="/contact" 
                        style={{ 
                            color: darkTheme ? '#f5f5f5' : '#282828', 
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <button
                onClick={toggleTheme}
                style={{
                    marginLeft: '20px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    backgroundColor: darkTheme ? '#f5f5f5' : '#282828',
                    color: darkTheme ? '#282828' : '#f5f5f5',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                {darkTheme ? 'Light Theme' : 'Dark Theme'}
            </button>
        </nav>
    );
};

export default Navbar;
