// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider } from './ThemeContext';

// ReactDOM.render(
//     <ThemeProvider>
//         <App />
//     </ThemeProvider>,
//     document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change here
import App from './App';
import { ThemeProvider } from './ThemeContext';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
