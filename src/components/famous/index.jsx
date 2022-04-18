import React from 'react';
import { motion } from 'framer-motion';
import Slider from '../slider'
import './fame.css'

import PaginationControlled from '../pagination'
export default  () => {
  return (
      <div className='fame'>
        <div className="fame_menu">
                <motion.div className="fame_header" whileHover={{scale:1.1 }}>
                    <div className="fame_header_title">
                    پرطرفدار های هفته
                    </div>
                </motion.div> 
        </div>
        <div className='fame_avatar'>
          <Slider/>
        </div>
      </div>
     
  )
};


