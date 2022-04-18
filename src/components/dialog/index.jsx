import React from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {motion} from 'framer-motion'
import './dialog.css'


export default ({show,passIcon,phoneIcon,signIcon,findPassIcon}) => {
  
  const DialogAnimate ={
    hidden :{
      y:-550
    },
    visible :{
      y:0,
      transition:{
        delay:.4,
        duration:.6,
      }
    },
    hover:{
      scale:1.04,
    }
    
  }

  return (
    <div className='backdrop' >
        <motion.div className="modal" variants={DialogAnimate} initial="hidden" animate="visible" whileHover="hover">
          <div className="modal-title">
              <p>ورود به سامانه کاربری</p>
              <div className="modal-Close" onClick={show}>
                <CloseIcon  />
              </div>
          </div>
          <div className="modal-body">
                <div className='input-containerr'>
                  {phoneIcon}
                  <input type="number"  placeholder='شماره تلفن خود را وارد کنید'/>
                </div>
                <div className='input-containerr'>
                  {passIcon}
                  <input type="password"  placeholder='رمزعبور خود را وارد کنید'/>
                </div>
          </div>
          <div className="modal-footer">
            <Button variant='outlined'> ثبت</Button>
          </div>
          <div className='modal-options'>
            <div className='option'>
              {signIcon}
              <Button autoFocus> ثبت نام در سایت</Button>
            </div>
            <div className='option'>
              {findPassIcon}
            <Button  autoFocus> فراموشی رمزعبور</Button>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

