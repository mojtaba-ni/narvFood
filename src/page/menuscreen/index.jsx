import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/card'
import './Menu.css'

export default () => {
  const menu_anim_variants={
    hidden:{
      opacity:0,
      y:'-30vh'
    },
    visible:{
      opacity:1,
      y:0,
    
      transition:{  
        duration:.8
      }
    },
  }
  const menuList =[
    {
      name :"رستوران نمونه",
      image :'image/menu/15761590568968.png'
     
    },
    {
      name : "رستوران آرمانی",
      image :'image/menu/armani.png'
      
    },
    {
      name : "رستوران اقبالی",
      image :'image/menu/15572907038045.png'
      
    },
    {
      name : "رستوران چیلی",
      image :'image/menu/15790605692792.png'
      
    },
    {
      name : "اغذیه بلوار",
      image :'image/menu/15872049724436.png'
      
    },
    {
      name : "کته سرای عارف",
      image :'image/menu/16093221547167.png'
      
    },
    {
      name : "بام لند دیاکو",
      image :'image/menu/16045956227427.png'
      
    },
    {
      name : "کباب لند",
      image :'image/menu/16244410191581.png'
      
    },
  ]
  console.log({menuList})
  return(
      <div className="menu">
        <motion.div className="menu_display" initial="hidden" whileInView="visible">
          {menuList.map((item)=>
            <Card name={item.name} Img={item.image}/>
          )}
        </motion.div>
      </div>
  ) 
   
};



