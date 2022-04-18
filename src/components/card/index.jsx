import React from 'react';
import {Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core'
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import './card.css'


const useStyles = makeStyles({
  root: {
    width: 240,
    padding:5,

  },
  type: {
    marginTop:9

  },
});

export default ({name,Img}) => {
  const classes = useStyles();
  const card_anim_variants={
    hidden:{
      opacity:0,
      y:'-25vh'
    },
    visible:{
      opacity:1,
      y:0,
    
      transition:{
        delay:1,
        duration:3
      }
    },
    hover:{
      scale:1.1
    }
  }
  return (
    <motion.div 
    className='whole-card'
    variants={card_anim_variants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="215"
            image={require(`../../${Img}`)}
            title="Pizza"
          />
          <CardContent>
            <div className='card_header'>{name} </div>
            <Typography className={classes.type} variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
    </motion.div>
  )
};

 


