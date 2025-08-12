import React from 'react'

const Header = () => {
    return (
        <>
            <nav>
                <div className="container-fluid shadow" >
                    <div className="row  d-flex align-items-center px-4">
                        <div className="col-md-2 d-flex justify-content-start">
                            <img src="https://static.vecteezy.com/system/resources/previews/024/043/963/original/book-icon-clipart-transparent-background-free-png.png" alt="no img" style={{ width: '110px' }} />
                        </div>
                        <div className="col-md-8 d-flex justify-content-center">
                            <h2 className='fw-bold' style={{ userSelect: 'none' }}>BOOKBUZZ</h2>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end">
                            <button className='btn border border-black w-50'>login</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header