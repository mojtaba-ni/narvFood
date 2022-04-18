import React from 'react'
import { motion } from 'framer-motion';
import footerImg from '../../image/footerr.png'
import './footer.css'

export default () => {
  return (
    <div className='footer-container'>
        <div className="footer-img">
            <div className="img">
                <img src= {footerImg} alt="" />
            </div>
            <nav className='footer-nav'>
                <div className="nav-ul">
                    <div className="nav-li">
                        <a href="">خانه</a>
                    </div>
                    <div className="nav-li">
                        <a href="">رستوران ها</a>
                    </div>
                    <div className="nav-li">
                        <a href="">پرفروش ها</a>
                    </div>
                    <div className="nav-li">
                        <a href="">اطلاعات تماس</a>
                    </div>
                </div>
                <div className="nav-ul">
                    <div className="nav-li">
                        <a href="">سفارش آنلاین</a>
                    </div>
                    <div className="nav-li">
                        <a href="">درباره ها</a>
                    </div>
                    <div className="nav-li">
                        <a href="">اطلاعات تماس</a>
                    </div>
                    <div className="nav-li">
                        <a href="">اطلاعات تماس</a>
                    </div>
                </div>
                <div className="nav-ul">
                    <div className="nav-li">
                        <a href="">همکاری</a>
                    </div>
                    <div className="nav-li">
                        <a href="">ثبت نام</a>
                    </div>
                    <div className="nav-li">
                        <a href="">خانه</a>
                    </div>
                    <div className="nav-li">
                        <a href="">اطلاعات تماس</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}





