import React, { useEffect } from 'react'
import Header from '../components/Header'
import { FaBook } from "react-icons/fa";
import { BiSolidBookAdd } from "react-icons/bi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { addBookApi, getAllBooksApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const navigate = useNavigate()

    const [token, setToken] = useState('')
    // console.log(token);

    const [bookDetails, setBookDetails] = useState({
        title: "",
        author: "",
        description: "",
        imageurl: ""
    })
    // console.log(bookDetails);

    const [allBooks, setAllBooks] = useState([])
    // console.log(allBooks);
    const [searchKey, setSearchKey] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Add new books
    const handleAdd = async () => {
        const { title, author, description, imageurl } = bookDetails

        if (!title || !author || !description || !imageurl) {
            toast.info('Please fill the form completely')
        }
        else {
            const reqBody = {
                title, author, description, imageurl
            }

            const reqHeader = {
                'Authorization': `Bearer ${token}`
            }

            const result = await addBookApi(reqBody, reqHeader)
            console.log(result);

            if (result.status == 200) {
                toast.success('Book added successfully')
                handleReset()
                handleClose()
            }
        }
    }

    // Reset button
    const handleReset = () => {
        setBookDetails({
            title: "",
            author: "",
            description: "",
            imageurl: ""
        })
    }

    // Get all books
    const getAllBooks = async () => {
        const result = await getAllBooksApi(searchKey)
        // console.log(result);
        setAllBooks(result.data)
    }

    // navigate to a book detail page
    const handleNavigate = (id) => {
        navigate(`/bookdetails/${id}`)
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }

        getAllBooks()
    }, [searchKey])

    return (
        <>
            <Header />

            <header >
                <div className="container-fluid main">
                    <div className="row d-flex flex-column align-items-center justify-content-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '200px' }}>
                            <h1 className='text-white' style={{ userSelect: 'none' }}>Discover. Review. Repeat</h1>
                            <div className='w-100 mt-3'>
                                <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='search name...' className='form-control' />
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
                        <h3 style={{ userSelect: 'none' }}>All BOOKS</h3>
                    </div>

                    {token && <div className='d-flex align-items-center ms-5 mt-5'>
                        <h3 className='text-success' style={{ userSelect: 'none' }}>ADD NEW BOOK</h3>
                        <div onClick={handleShow} className='d-flex justify-content-center align-items-center shadow ms-3' style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(229, 230, 225, 1)' }}>
                            <BiSolidBookAdd className='fs-3 book text-success' style={{ cursor: 'pointer' }} />
                        </div>
                    </div>}
                </div>

                <div className="container">
                    <div className="row mt-5 ps-5">
                        {allBooks?.length > 0 ?
                            allBooks.map((item, index) => (
                                <div className="col-md-3 mb-5" key={index} style={{ userSelect: '' }}>
                                    <div onClick={() => handleNavigate(item?._id)} className='d-flex flex-column align-items-center border shadow' style={{ width: '260px', borderRadius: '20px', cursor: 'pointer' }}>
                                        <div className='mb-3'>
                                            <img src={item?.imageurl} alt="no img" style={{ width: '250px', height: '300px', borderRadius: '20px' }} />
                                        </div>
                                        <h6>{item?.author}</h6>
                                        <h5 className='fw-bolder'>{item?.title}</h5>
                                    </div>
                                </div>
                            ))
                            :
                            <p>No books added</p>
                        }
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
                style={{ paddingTop: '100px', backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
                <Modal.Header closeButton className='bg-secondary'>
                    <Modal.Title className='text-white'>ADD BOOKS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mb-3'>
                            <input type="text" value={bookDetails.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} className='form-control' placeholder='Title' style={{ backgroundColor: 'rgba(187, 194, 195, 0.33)' }} />
                        </div>

                        <div className='mb-3'>
                            <input type="text" value={bookDetails.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} className='form-control' placeholder='Author' style={{ backgroundColor: 'rgba(187, 194, 195, 0.33)' }} />
                        </div>

                        <div className='mb-3'>
                            <textarea type="text" value={bookDetails.description} onChange={(e) => setBookDetails({ ...bookDetails, description: e.target.value })} className='form-control' placeholder='Description' style={{ backgroundColor: 'rgba(187, 194, 195, 0.33)' }} />
                        </div>

                        <div className='mb-3'>
                            <input type="text" value={bookDetails.imageurl} onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} className='form-control' placeholder='Image URL' style={{ backgroundColor: 'rgba(187, 194, 195, 0.33)' }} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='bg-secondary'>
                    <Button variant="danger" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="success" type='button' onClick={handleAdd}>ADD</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default BookList