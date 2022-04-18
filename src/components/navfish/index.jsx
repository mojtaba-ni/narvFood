import React from 'react'
import pitzaaIC from '../../image/navIcon/pitzaaIC.png'
import hotDogIC from '../../image/navIcon/hotDogIC.png'
import dessertIC from '../../image/navIcon/dessert.png'
import drinkIC from '../../image/navIcon/drinkIC.png'
import burgerIC from '../../image/navIcon/burgerIC.png'
import salaadIC from '../../image/navIcon/saladIC.png'
import Burger from '../../image/icons/hamburger.png'
import Pizza from '../../image/icons/pizza-slice.png'
import Sandwich from '../../image/icons/hot-dog.png'
import Salad from '../../image/icons/salad.png'
import Drink from '../../image/icons/bloody-mary.png'
import Dessert from '../../image/icons/jelly.png'
import {motion} from 'framer-motion'
import './navfish.css'

export default () => {
    const li_anim_variants ={
        hover:{
            textShadow: "0px 0px 4px rgb(150,150,150)"
        },
    }
    return (
        <div className='navfish'>
            <div className="navfish_container">
                <ul className='main_nav'>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Pizza} alt="" />
                            <p>پیتزا</p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>پیتزا مخصوص</p><img src={pitzaaIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>پیتزا مخلوط</p><img src={pitzaaIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>پیتزا پپرونی</p><img src={pitzaaIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>پیتزا گوشت و قارچ</p><img src={pitzaaIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>پیتزا مرغ و قارچ</p><img src={pitzaaIC} alt="" /> </div>
                            </motion.li>
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Burger} alt="" />
                            <p>برگر</p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>برگر</p><img src={burgerIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>چیز    برگر</p><img src={burgerIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>دبل چیزبرگر</p><img src={burgerIC} alt="" /> </div>
                            </motion.li>
                            
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Sandwich} alt="" />
                            <p>ساندویچ </p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>همبرگر</p><img src={hotDogIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>بندری </p><img src={hotDogIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>ماکارانی</p><img src={hotDogIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>فلافل</p><img src={hotDogIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>هات داگ    </p><img src={hotDogIC} alt="" /> </div>
                            </motion.li>
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Salad}  alt="" />
                            <p>سالاد </p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>سالاد فصل</p><img src={salaadIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>سالاد کلم</p><img src={salaadIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>سلاد سزار</p><img src={salaadIC} alt="" /> </div>
                            </motion.li>
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Drink}  alt="" />
                            <p>نوشیدنی </p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>نوشابه</p><img src={drinkIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>دلستر</p><img src={drinkIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>دوغ</p><img src={drinkIC} alt="" /> </div>
                            </motion.li>
                        </ul>
                    </li>
                    <li className='dropdown'>
                        <div className='nav-title'> 
                            <img src={Dessert} alt="" />
                            <p>دسر </p>
                        </div>
                        <ul className='drop-nav'>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>چیز کیک</p><img src={dessertIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>ژله</p><img src={dessertIC} alt="" /> </div>
                            </motion.li>
                            <motion.li variants={li_anim_variants} whileHover="hover">
                                <div className='drop-nav-div'><p>ماست یونانی</p><img src={dessertIC} alt="" /> </div>
                            </motion.li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}


