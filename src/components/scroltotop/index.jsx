import React,{useState} from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './ScrolToTop.css'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleUp = () =>{
        const scroll = document.documentElement.scrollTop;
        if(scroll > 300){
            setVisible(true)
        }else if(scroll<= 300){
            setVisible(false)
        }
    }
    const scrollTop = () =>{
        window.scrollTo({top:0, behavior:"smooth"})
    } 
    window.addEventListener("scroll" , toggleUp)
  return (
    <>
        {visible && 
            <div className='scrollToTop' onClick={scrollTop}>
                <ExpandLessIcon/>
            </div>
        }
    </>
  )
};

export default ScrollToTop;