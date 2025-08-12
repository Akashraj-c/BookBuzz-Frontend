import React from 'react'
import Header from '../components/Header'
import { FaBook } from "react-icons/fa";
import { BiSolidBookAdd } from "react-icons/bi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />

            <header >
                <div className="container-fluid main">
                    <div className="row d-flex flex-column align-items-center justify-content-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '200px' }}>
                            <h1 className='text-white'>Discover. Review. Repeat</h1>
                            <div className='w-100 mt-3'>
                                <input type="text" placeholder='search name...' className='form-control' />
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </header>

            <section>
                <div className='d-flex justify-content-between align-items-center pe-5'>
                    <div className='d-flex align-items-center ms-5 mt-5'>
                        <div className='d-flex justify-content-center align-items-center me-3' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(189, 191, 184, 1)' }}>
                            <FaBook className='fs-3' />
                        </div>
                        <h3>All BOOKS</h3>
                    </div>

                    <div className='d-flex align-items-center ms-5 mt-5'>
                        <h3 className='text-success'>ADD</h3>
                        <div onClick={handleShow} className='d-flex justify-content-center align-items-center shadow ms-3' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(229, 230, 225, 1)' }}>
                            <BiSolidBookAdd className='fs-3 book text-success' />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5 ps-5">
                        <div className="col-md-3 mb-5">
                            <div className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px' }}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="no img" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                        <div className="col-md-3 ">
                            <div className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px' }}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px' }}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px' }}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px' }}>
                                <div className='mb-3'>
                                    <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                </div>
                                <h6>Author</h6>
                                <h5>Title</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal for add books */}
            <Modal
                show={show}
                size='l'
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{paddingTop:'100px',backgroundColor:'rgba(0,0,0,0.7)'}}
            >
                <Modal.Header closeButton className='bg-secondary'> 
                    <Modal.Title className='text-white'>ADD BOOKS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <form>
                       <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Title' />
                       </div>
    
                        <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Author' />
                       </div>
    
                        <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Description' />
                       </div>
    
                        <div className='mb-3'>
                        <input type="text" className='form-control' placeholder='Image URL' />
                       </div>
                   </form>
                </Modal.Body>
                <Modal.Footer className='bg-secondary'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">ADD</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookList