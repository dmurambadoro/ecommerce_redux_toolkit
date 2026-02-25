
import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import CartSlice from './CartSlice';

const SuperCoin = () => {
    
    const [superCoins, setSuperCoins] = useState(0);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    useEffect(() => {
        let superCoins = 0;

        if (totalAmount >=100 && totalAmount < 200) {
            setSuperCoins(10);
        } 
        else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        }
        else if (totalAmount >= 300) { 
            setSuperCoins(30); 
        } 
        else { 
            setSuperCoins(0); 
        } 
    }, [totalAmount]); // runs each time dependency array value changes
    
    return (
        <div>
            {`Your super coins: ${superCoins}`}
        </div>
    ) 
}
export default SuperCoin;