import React from 'react'
import PizzaDeep from '../../image/burgerslide-final.png' 
import Button from '@material-ui/core/Button';
import PizzaSlice from '../../image/pizzaMenu/menu-banner-slice.jpg' 
import PizzaThin from '../../image/pizzaMenu/menu-banner-thin.jpg' 
import './pizzaMenu.css'

export default () => {

    return (
        <div className='pizza_menu'>
            
            <div className="pizza_first">
                <div>
                    <img src={PizzaDeep} alt="PizzaDeep" />
                </div>
                <div>پیتزا رست بیف</div>
            </div>
            <div className="pizza_second">
                <div>
                    <img src={PizzaDeep} alt="PizzaDeep" />
                </div>
                <div>پیتزا رست بیف</div>
            </div>
            <div className="pizza_third">
                <div>
                    <img src={PizzaDeep} alt="PizzaDeep" />
                </div>
                <div>پیتزا رست بیف</div>
            </div>
            <div className="pizza_desc">
                <div>
                    <p>sssssssssssss</p>
                </div>
                <Button className='first_button' variant="contained" color="secondary">
                       <span>سفارش دهید</span> 
                </Button>
            </div>
        </div>
    )
}


