import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './input.css'

export default ({ placeholder,HandleInput,inputValue,HandleButtonInput,MobileInput }) => {
  
  return (
    <div className={`input-container ${MobileInput ? "active" : ""}`}>
        <SearchIcon className='input-icon'/>
        <input type="text" value={inputValue} placeholder={placeholder} onChange={HandleInput}/>
        <Button variant="outlined"  onClick={HandleButtonInput}>
            جستجو
        </Button>
    </div>
  )
}

