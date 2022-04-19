import { Container,Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import MobileApp from '../../image/appF.png'
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import  './mobilePart.css'

export default  () => {
    const text_anim_variants={
        hidden:{
          opacity:0,
          y:'-25vh'
        },
        visible:{
          opacity:1,
          y:0,
        
          transition:{
            delay:.5,
            duration:.8
          }
        },
       
      }
  return (
      <div className='mobile_part'>
        <div className="mobilePart_left">
            <Container className='mobilePart_container'>
                <motion.img whileHover={{originX:0, scale:1.04}}  src={MobileApp} alt=""  />
            </Container>
        </div>
        <motion.div className="mobilePart_right" variants={text_anim_variants} 
        initial="hidden" whileInView="visible" viewport={{once:true}}>
            <Container>
                <div className='header'>
                    اپلیکیشن اندروید و iOS
                </div>
                <div className='body'>
                اپلیکیشن های اندروید و IOS ابهر فود به شما امکان سفارش سریع و راحت سفارش غذا، کالا، شیرینی و نان در ابهر را می دهد. با نصب این برنامه ها ابهر فود همواره در گوشی شما در دسترس خواهد بود و با چند عملیات ساده می توانید کالای مورد نظر را در محل دلخواه دریافت نمایید.
                </div>
                <div className="footter">
                برای دریافت نرم افزار ابهرفود کلیک کنید:
                </div>
                <div className='mobile_button'> 
                    <Button variant="contained" ><span>Android</span> <AndroidIcon/></Button>
                    <Button  variant="contained" ><span>Ios</span><AppleIcon/></Button>
                </div>
            </Container>
        </motion.div>  
          
      </div>
  )
};


