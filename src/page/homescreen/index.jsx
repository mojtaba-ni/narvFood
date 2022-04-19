import React,{useState} from 'react'
import NavFish from '../../components/navfish'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './first.css'

export default  () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const HandleSidebar = () =>{
        setShowSidebar(!showSidebar)
    }
   
    return (
        <div className='home'>
            <Navbar HandleSidebar={HandleSidebar}/>
            <NavFish/>
            <div className='home_pos'>
            </div>
            {showSidebar && 
                <Sidebar HandleClose={HandleSidebar} />
            }
            
        </div>
       
    )
}


