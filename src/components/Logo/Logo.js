import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.gif'
import './Logo.css';

const Logo = () => {
    return (
            <Tilt
                style={{ height: '150px', width: '150px', padding: '30px', margin: '20px', backgroundColor: 'aquamarine' }}
                className='br2 shadow-2 tilt'
                tiltMaxAngleX={55}
                tiltMaxAngleY={55}
            >
                <div style={{}}>
                    <img alt="logo" src={brain} width="80px"/>
                </div>
            </Tilt>
    );
}

export default Logo;