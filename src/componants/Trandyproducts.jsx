import React from 'react'

function Trandyproducts() {
  return (
    <section className='trandy'>
            <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz22Q4OSlNSk1xIlAcJtgWCpckKw1rlGWemw&usqp=CAU" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNwhjmQbIyh3n3zb3RODK7VdtBqV-RgyOpA&usqp=CAU" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div className="d-flex justify-content-center">
                        <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                    <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Trandyproducts