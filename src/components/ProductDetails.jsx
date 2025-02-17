import React from 'react'
import style from '../style/ProductDetails.module.css'

const ProductDetails = () => {
  return (
    <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold">Designed for engineers</h1>
      <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <a className="icon-link" href="#">
          Learn more
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
        <a className="icon-link" href="#">
          Buy
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
    <div className={`product-device shadow-sm d-none d-md-block ${style.product1}`}></div>
    <div className={`product-device product-device-2 shadow-sm d-none d-md-block ${style.product2}`}></div>
      </div>
    </>
  )
}

export default ProductDetails