import React from 'react';
import queraFont from './assets/Fonts/quera-font/Quera-DEMO-BF68be80d1aceec.otf';

const ComingSoon = () => {
    return (
        <div 
            style={{ 
                height: '100vh',
                width: '100vw',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                padding: 0,
                overflow: 'hidden'
            }}
        >
            <style>{`
                @font-face {
                    font-family: 'Quera';
                    src: url(${queraFont}) format('opentype');
                    font-weight: bold;
                    font-style: normal;
                }
            `}</style>
            <h1 
                style={{ 
                    color: 'white',
                    fontFamily: "'Quera', sans-serif",
                    fontWeight: 'bold',
                    fontSize: 'clamp(2rem, 10vw, 8rem)',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}
            >
                COMING SOON
            </h1>
        </div>
    );
};

export default ComingSoon;
