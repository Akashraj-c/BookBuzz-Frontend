import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";

const Header = () => {

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
    }, [])
    const navigate = useNavigate()

    const [token, setToken] = useState('')
    // console.log(token);

    // handle Logout
    const handleLogout = async () => {
        sessionStorage.removeItem('existingUser')
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <nav>
                <div className="container-fluid shadow" >
                    <div className="row  d-fle align-items-center px-4">
                        <div className="col-md-2 d-flex justify-content-start">
                            <Link to={'/'}> <img src="https://static.vecteezy.com/system/resources/previews/024/043/963/original/book-icon-clipart-transparent-background-free-png.png" alt="no img" style={{ width: '110px' ,userSelect:'none'}} /></Link>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center">
                            <h2 className='fw-bold' style={{ userSelect: 'none' }}>BOOKBUZZ</h2>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end">
                            {!token ? <Link to={'/login'}><button className='btn border border-black'>Login <AiOutlineLogin className='text-success fs-4 ms-2' /></button></Link>
                                :
                                <button onClick={handleLogout} className='btn border border-black '>Logout <RiLogoutCircleLine className='text-danger fs-4 ms-2' /></button>}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header