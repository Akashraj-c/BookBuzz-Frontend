import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row shadow px-5" style={{ backgroundColor: 'rgba(224, 224, 234, 1)' }}>
                    <div className="col-md-4 d-flex flex-column align-items-center jusify-content-center mt-5">
                        <div className='d-flex align-items-center w-100 '>
                            <img src="https://static.vecteezy.com/system/resources/previews/024/043/963/original/book-icon-clipart-transparent-background-free-png.png" alt="no img" style={{ width: '80px' }} />

                            <h4>BOOKBUZZ</h4>
                        </div>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt veritatis commodi enim ex molestias repellendus est beatae! Distinctio, quasi consectetur alias labore ipsam neque minus ratione blanditiis animi eius quod!</p>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center mt-4">
                        <h4>NEWSLETTERS</h4>
                        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <p>Stay updated with our latest trends</p>
                           <div className='w-100 d-flex justify-content-center'>
                             <input type="text" className='form-control w-50'/>
                            <button className='btn btn-warning'><FaArrowRight /></button>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                        <h4>FOLLOW US</h4>
                        <ul className='list-unstyled d-flex align-items-center justify-content-center'>
                            <Link to={'https://www.instagram.com/accounts/login/?hl=en'} target='_blank'><li className='fs-4 text-black me-3'><FaInstagram /></li></Link>
                            <Link to={'https://www.facebook.com/'} target='_blank'><li className='fs-4 me-3 text-black'><FaFacebook /></li></Link>
                            <Link to={'https://www.linkedin.com/'} target='_blank'><li className='fs-4 me-3 text-black'><FaLinkedin /></li></Link>
                            <Link to={'https://x.com/?lang=en-in'} target='_blank'><li className='fs-4 me-3 text-black'><FaTwitterSquare /></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer