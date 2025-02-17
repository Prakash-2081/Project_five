import React, { useContext } from 'react'
import style from '../style/ImageDetails.module.css'
import { UseContextApi } from '../store/AllContext';

const ImageDetails = () => {
    const {container1Ref,container2Ref,container3Ref,container1Visible,container2Visible,container3Visible}=useContext(UseContextApi);
    console.log("container1RefVisible: ",container1Visible)
    console.log("container2RefVisible: ",container2Visible)
    console.log("container3RefVisible: ",container3Visible)

    const headingDetails='Our Products';
    const details1='A good and mesmerzing product'
    const details2='High dignity, easy to configure'
    const details3='Make your move with elight product'
  return (
    <>
    <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">{headingDetails}</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className={`col ${container1Visible ? style.visibleStyle1: style.visibleStyle2}`} ref={container1Ref}>
        <div className={`card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg ${style.card_background1}`} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{details1}</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>Earth</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`col ${container2Visible ? style.visibleStyle1: style.visibleStyle2}`} ref={container2Ref}>
      <div className={`card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg ${style.card_background2}`} >
      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{details2}</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>Pakistan</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`col ${container3Visible ? style.visibleStyle1: style.visibleStyle2}`} ref={container3Ref}>
      <div className={`card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg ${style.card_background3}`} >
      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{details3}</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                <small>California</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default ImageDetails