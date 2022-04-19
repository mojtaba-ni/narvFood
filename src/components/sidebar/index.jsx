import React from 'react'
import {motion} from 'framer-motion'
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './sidebar.css'

export default  ({HandleClose}) => {
    const SidebarAnimate ={
        hidden :{
          x:310
        },
        visible :{
          x:0,
          transition:{
            delay:.4,
            duration:.5,
          }
        },  
      }
  return (
    <div className="sidebar-backdrop">
        <motion.div className='sidebar' variants={SidebarAnimate}
        initial="hidden" animate="visible">
            <div className="sidebar-header" onClick={HandleClose}>
                <CloseIcon  />
            </div>
            <nav className='navbarr'>
                <div className="navbarLi">
                  <a href=""> <ChevronLeftIcon/>سفحه اصلی</a>
                </div>
                <div className="navbarLi">
                  <a href=""> <ChevronLeftIcon/> منو اصلی</a>
                </div>
                <div className="navbarLi">
                  <a href=""> <ChevronLeftIcon/>  اطلاعات تماس</a>
                </div>
                <div className="navbarLi">
                  <a href=""> <ChevronLeftIcon/> درباره ما</a>
                </div>
                <div className="navbarLi">
                  <a href=""> <ChevronLeftIcon/>  سفارش آنلاین</a>
                </div>
            </nav>
        </motion.div>
    </div>
  )
}

