import React from 'react'
import Header from '../components/Header'
import { FaRegStar } from "react-icons/fa";

const BookDetails = () => {
    return (
        <>
            <Header />

            <div className="container">
                <div className="row border rounded mt-5 shadow">
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <img src="https://m.media-amazon.com/images/I/61De10B-ooL.AC_SX500.jpg" alt="no img" style={{ width: '300px', height: '350px', borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-9 ">
                        <div className='d-flex flex-column justify-content-center  align-items-center mt-5'>
                            <h4>Ram Co Anandhi</h4>
                            <p>DC BOOKS</p>
                        </div>
                        <div className='d-flex justify-content-between mt-5 px-2'>
                            <h6><span className='fw-bold'>Publisher:</span> Archibald Constable and Company</h6>
                            <h6><span className='fw-bold'>Language:</span> English</h6>
                            <h6><span className='fw-bold'>No of Pages:</span> 260</h6>
                        </div>
                        <div className='mt-4'>
                            <p className='p-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam provident non iusto iste illo, maxime quia voluptatum corporis esse amet, veritatis veniam aut molestiae, sapiente facere maiores error nisi atque?
                                Impedit voluptatum eum necessitatibus ipsa dolor a saepe repellendus doloremque nemo perspiciatis rerum magni, soluta facilis quis quidem ad molestias! Voluptatem cum nam quas adipisci aspernatur dignissimos, tempora atque corporis!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <h3 className='me-3'><FaRegStar /></h3>
                <h3 className='me-3'><FaRegStar /></h3>
                <h3 className='me-3'><FaRegStar /></h3>
                <h3 className='me-3'><FaRegStar /></h3>
                <h3 className='me-3'><FaRegStar /></h3>
            </div>

            <div className='d-flex flex-column  justify-content-center align-item-center w-100'>
                <div className='w-100 d-flex  justify-content-center'>
                    <textarea rows={3} placeholder='Add Review.....' className='form-control border border-dark w-50  mt-3 p-3'></textarea>
                </div>

                <div className='w-100 d-flex  justify-content-center'>
                    <button className='btn btn-success mt-3 w-25'>Add</button>
                </div>
            </div>

            <div className='p-5'>
                <div className='d-flex  align-items-center shadow border py-2 rounded'>
                    <img className='me-5' src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="no img" style={{ width: '100px' }} />
                    <p className='px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in deserunt ad nulla eaque temporibus nihil magni omnis optio nisi at voluptatem sit, molestias quaerat, repellendus laborum unde ipsum iste!</p>
                </div>
            </div>
        </>
    )
}

export default BookDetails