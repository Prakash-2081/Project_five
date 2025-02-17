import React from 'react'

const Details = () => {
    const headingFirst='We are the 1st company to provide Electronic Service';
    const bodydetails='Here, item from the small to large are available with a affordable cost.Our motive is to provide a well achive products to our Customer'
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{headingFirst}</h1>
        <p className="lead">{bodydetails}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">See Inside</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Details