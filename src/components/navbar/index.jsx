import React,{useState} from 'react'
import Menu from '../menu'
import Logo from '../../image/pzz.png'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Input from "../input"
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockIcon from '@material-ui/icons/Lock';
import SearchIcon from '@material-ui/icons/Search';
import { motion } from 'framer-motion';
import Login from '../dialog'
import './navbar.css'



export default ({HandleSidebar}) => {
   const [dialog, setShowDialog] = useState(false)
   const [MobileInput, setMobileInput] = useState(false)
   const [inputValue, setInputValue] = useState("")

    const HandleDialog = () =>{
        setShowDialog(!dialog)
    }
    const HandleInputValue = (e) =>{
        setInputValue(e.target.value)
    }
    const HandleButtonInput = (e) =>{
        setInputValue("")
    }
    const HandleShowInput = (e) =>{
        setMobileInput(!MobileInput)
    }
    return (
        <div className='navbar'>
            <div className="container">
                    <div className="ham" onClick={HandleSidebar}>
                        <MenuIcon/>
                    </div>
                <div className="theright">
                    <Menu title={'خانه'}/>
                    <Menu title={'درباره ما'}/>
                    <Menu title={'سفارش آنلاین'}/>
                    <Menu title={'اطلاعات تماس'}/>
                </div>
                <div className="navbar_logo">
                    <motion.img src={Logo} alt="fuckking logo" 
                    whileHover={{scale:1.15}} />
                </div>
                <div className="theleft">
                   <Input HandleInput={HandleInputValue} 
                   HandleButtonInput={HandleButtonInput} MobileInput={MobileInput}
                   inputValue={inputValue} placeholder="نام رستوران را وارد کنید" />
                   <div className="button-logg"> 
                        <div>
                            <Button variant="contained" className="button-sign" onClick={HandleDialog} >
                                <PersonIcon/>
                                <span className='sign-span'>ورود</span>
                            </Button>
                        </div>
                        <div>
                            <Button variant="contained" className="button-search" onClick={HandleShowInput} >
                                <SearchIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
               

              
            </div>
            {dialog &&
                    <Login 
                    show={HandleDialog} passIcon={<VpnKeyIcon/>} 
                    phoneIcon={<PhoneAndroidIcon/>}  signIcon={<AssignmentIndIcon/>}
                    findPassIcon={<LockIcon/>}/>
                }
                   
        </div>
    )
}


