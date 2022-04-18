import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { motion } from 'framer-motion';
import './menu.css'

export default ({title})  => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <motion.span 
        className='menu_title'
        whileHover={{
          scale:1.1,
          originX:0,
          textShadow: '0px 0px 4px rgb(150,150,150)'
        }}
        >{title}</motion.span>
      </Button>
   
    </div>
  );
}