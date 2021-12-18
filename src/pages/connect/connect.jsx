import React from 'react';
import NavBar from '../../components/navbar/navbar';
import './connect.scss';

const Connect = () => {
    return ( 
        <div className="connect">
            <NavBar />
            {/* <form action="https://formspree.io/f/xdoyprpn" method="POST" className="field">
                <textarea name="Message" className="text-box" cols="30" rows="10" placeholder="TYPE A MESSAGE"></textarea>
                <button>SEND</button>
            </form> */}
            <a href="mailto:connect@joshuaakpan.com"><p className='tm'>CONNECT@JOSHUAAKPAN.COM</p></a>
        </div>
     );
}
 
export default Connect;