import React from 'react'
import Header from '../components/Header'
import { FaBook } from "react-icons/fa";

const BookList = () => {
    return (
        <>
            <Header />

            <header >
                    <div className="container-fluid main">
                        <div className="row d-flex flex-column align-items-center justify-content-center">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center" style={{marginTop:'200px'}}>
                                <h1 className='text-white'>Discover. Review. Repeat</h1>
                                <div className='w-100 mt-3'>
                                    <input type="text" placeholder='search name...' className='form-control'/>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
            </header>

            <section>
                <div className='d-flex align-items-center ms-5 mt-5'>
                    <div className='d-flex justify-content-center align-items-center me-3' style={{width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'rgba(189, 191, 184, 1)'}}>
                        <FaBook className='fs-3' />
                    </div>
                    <h3>All BOOKS</h3>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 mb-5">
                            <div className='d-flex flex-column align-items-center border shadow' style={{width:'260px',borderRadius:'20px'}}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{width:'250px',height:'300px',borderRadius:'20px'}}/>
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>
                        
                         <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{width:'260px',borderRadius:'20px'}}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{width:'250px',height:'300px',borderRadius:'20px'}}/>
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                         <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{width:'260px',borderRadius:'20px'}}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{width:'250px',height:'300px',borderRadius:'20px'}}/>
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                         <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{width:'260px',borderRadius:'20px'}}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{width:'250px',height:'300px',borderRadius:'20px'}}/>
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                         <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{width:'260px',borderRadius:'20px'}}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{width:'250px',height:'300px',borderRadius:'20px'}}/>
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookList