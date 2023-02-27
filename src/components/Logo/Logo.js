import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
            <Tilt
                style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }}
                className='br2 shadow-2 tilt'
                tiltMaxAngleX={55}
                tiltMaxAngleY={55}
            >
                <div style={{}}>
                    <h1>👀</h1>
                </div>
            </Tilt>
    );
}

export default Logo;