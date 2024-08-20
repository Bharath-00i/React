import React from 'react';
import { useTheme } from '../ThemeContext';

const SomeComponent = () => {
    const { darkTheme } = useTheme();

    return (
        <div style={{
            backgroundColor: darkTheme ? '#333' : '#fff',
            color: darkTheme ? '#fff' : '#000',
            padding: '20px',
            borderRadius: '5px'
        }}>
            <h1>Welcome to My Website</h1>
            <p>This is an example of a component that changes color based on the theme.</p>
        </div>
    );
};

export default SomeComponent;
