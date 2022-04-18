import React from 'react';
import Avatar from '@mui/material/Avatar';
import './avatar.css'

export default  (props) => {
  const {avatar_title,avatar_desc,avatar_image} = props
  return (
      <div className='fame-avatar'>
        <div className='fame-avatar-card'>
          <Avatar className='avatar'
          alt="Remy Sharp"
          src={avatar_image}
          sx={{ width: 100, height: 100 }}
          />
          <div className="avatar_header">
            {avatar_title}
          </div>
          <div className="avatar_body">
            {avatar_desc}
          </div>
        </div>
      </div>
  )
};


