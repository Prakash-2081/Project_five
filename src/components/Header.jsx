import React from 'react'
import style from '../style/Header.module.css'

import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const location=useLocation();
    const home=location.pathname=='/'
    const features=location.pathname =='/features'
    const about=location.pathname == '/about'

  return (
    <>
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <Link to='/' style={{textDecoration: 'none'}}><li className={style.listStyle} style={{background: home ? 'red': ''}}><span className={`nav-link px-2 text-${home? 'white': 'secondary'} ${style.spanStyle}`}>Home</span></li></Link>
          <Link to="/features" style={{textDecoration: 'none'}}><li className={style.listStyle} style={{background: features ? 'red': ''}}><span  className={`nav-link px-2 text-${features? 'white':'secondary'} ${style.spanStyle}`}>Features</span></li></Link>
          <Link to="/about" style={{textDecoration: 'none'}}><li className={style.listStyle} style={{background: about ? 'red': ''}}><span  className={`nav-link px-2 text-${about? 'white':'secondary'} ${style.spanStyle}`}>About</span></li></Link>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header