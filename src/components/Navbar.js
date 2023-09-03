import React, {useState} from 'react'
import Demo from "./Demo";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false)
    const show_event = () => {
        setShow(!show)
    }

    const navigate = useNavigate()

    return (
        <div>
            {/*Nav bar*/}
            <div className='align-default nav-bar'>
                <div>
                    <img
                        alt=' img cannot be displayed'
                        src='http://mediamart.wp3.zootemplate.com/wp-content/themes/zoo-mediamart/landing/images/logo.png'
                    />
                </div>
                <div className='nav-content'>
                    <p
                        className='cursor'
                        onClick={ () => navigate('/Demo')}>Demo
                    </p>

                    {/* onclick + use navigate*/}
                    <p
                        className='cursor'
                        onClick={ () => navigate('/Features')}  >Features
                    </p>

                    {/* href + path direct*/}
                    <a href='/Documents' className='cursor'>Documents</a>
                </div>

                <div>Purchase Now</div>
            </div>

            {/*call  component*/}
            {/* {} : run script */}
            {
                show && <Demo/>
            }
        </div>
    )
}

export default Navbar;
