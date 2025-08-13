import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { AbookDetailsApi, AddReviewApi, getAllReviewApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams()

    const [token, setToken] = useState('')
    const [reviewData, setReviewData] = useState('')
    // console.log(reviewData);
    const [reviewStar, setReviewStar] = useState('')
    const [AbookDetail, setAbookDetail] = useState('')
    const [allReviews, setAllReviews] = useState([])

    // get book details
    const bookDetails = async (id) => {
        const result = await AbookDetailsApi(id)
        // console.log(result);
        if (result.status == 200) {
            setAbookDetail(result.data)
        }
    }

    // add Review
    const handleReview = async (id, rating) => {
        if (!reviewData) {
            toast.info('please add your review')
        }
        else {
            const reqBody = {
                review: reviewData,
                rating
            }

            const reqHeader = {
                'Authorization': `Bearer ${token}`
            }

            const result = await AddReviewApi(reqBody, reqHeader, id)
            console.log(result);

            if (result.status == 200) {
                toast.success('Review added successfully')
                setReviewData('')
            }
            else if (result.status == 403) {
                toast.info(result.response.data)
            }
            else {
                toast.error('something went wrong')
            }
        }
    }

    // get all Reviews
    const getAllReviews = async (id) => {
        const result = await getAllReviewApi(id)
        console.log(result);

        if (result.status == 200) {
            setAllReviews(result.data)
        }
    }

    useEffect(() => {
        bookDetails(id)

        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }

        getAllReviews(id)
    }, [])

    return (
        <>
            <Header />

            <div className="container">
                <div className="row border rounded mt-5 shadow">
                    <div className="col-md-3 p-3 d-flex justify-content-center">
                        <img src={AbookDetail?.imageurl} alt="no img" style={{ width: '300px', height: '350px', borderRadius: '20px' }} />
                    </div>
                    <div className="col-md-9 ">
                        <div className='d-flex flex-column justify-content-center  align-items-center mt-5'>
                            <h4>{AbookDetail?.title}</h4>
                            <p>{AbookDetail?.author}</p>
                        </div>

                        <div className='mt-4'>
                            <p className='fw-bolder'>Description: </p>
                            <p className='px-5' style={{ textAlign: 'justify' }}>{AbookDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul className='d-flex justify-content-center mt-5 list-unstyled fs-3'>
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <li key={index} className="me-3" style={{ cursor: "pointer" }} onClick={() => setReviewStar(star)}>
                            {star <= reviewStar ? <FaStar className="text-warning" /> : <FaRegStar className="text-secondary" />}
                        </li>
                    ))}
                </ul>

            </div>

            <div className='d-flex flex-column  justify-content-center align-item-center w-100'>
                <div className='w-100 d-flex  justify-content-center'>
                    <textarea onChange={(e) => setReviewData(e.target.value)} rows={3} placeholder='Add Review.....' className='form-control border border-dark w-50  mt-3 p-3'></textarea>
                </div>

                <div className='w-100 d-flex  justify-content-center'>
                    {token ? <button className='btn btn-success mt-3 w-25' onClick={() => handleReview(id, reviewStar)}>Add</button>
                        :
                        <button disabled className='btn btn-success mt-3 w-25' onClick={() => handleReview(id)}>Add</button>}
                </div>
            </div>

            <div className='p-5 container'>
                {allReviews?.length > 0 ?
                    allReviews?.map((item, index) => (
                        <div key={index} className='d-flex  align-items-center shadow border py-2 rounded mb-4'>
                            <img className='mx-5' src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="no img" style={{ width: '100px' }} />
                            <div>
                                <p className='px-3'><span className='fw-bold'>User ID :</span> {item?.userMail}</p>
                                <p className={item?.rating==0 ? 'px-3 d-none' : 'px-3'}><span className='fw-bold'>Rating :</span> {item?.rating}</p>
                                <p className='px-3'>{item?.review}</p>
                            </div>
                        </div>
                    ))
                    :
                    <p>No Reviews.....</p>}
            </div>

            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default BookDetails