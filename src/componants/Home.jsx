import React from 'react'
import Trandyproducts from './Trandyproducts'
const Home = () => {
    return (
        <>
            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    <div className="col-md-6 pb-4">
                        <div className="position-relative  bg-primary text-center text-md-right text-white mb-2 py-5 px-5">
                            <img src="img/offer-1.png" alt="" />
                            <div className="position-relative" style={{ "z-index": 1 }}>
                                <h5 className="text-uppercase text-secondary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">
                                    Spring Collection
                                </h1>
                                <a
                                    href=""
                                    className="btn btn-outline-secondary py-md-2 px-md-3"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-primary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="img/offer-2.png" alt="" />
                            <div className="position-relative" style={{ "z-index": 1 }}>
                                <h5 className="text-uppercase text-secondary mb-3">
                                    20% off the all order
                                </h5>
                                <h1 className="mb-4 font-weight-semi-bold">
                                    Winter Collection
                                </h1>
                                <a
                                    href=""
                                    className="btn btn-outline-secondary py-md-2 px-md-3"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid btn_wrap my-5">
                <div className="row justify-content-md-center py-5 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3">
                                <span className=" px-2">Stay Updated</span>
                            </h2>
                            <p>
                                Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                                diam labore at justo ipsum eirmod duo labore labore.
                            </p>
                        </div>
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control border-white p-4"
                                    placeholder="Email Goes Here"
                                />
                                <div className="input-group-append">
                                    <button className=" mybtn px-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Trandyproducts />
        </>
    )
}

export default Home