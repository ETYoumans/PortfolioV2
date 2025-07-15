import { useEffect, useRef, useState } from 'react';
import "./Cartridge.css"
import Cartridge from './Cartridge';
import Left from './imgs/left.png'
import Right from './imgs/right.webp'
import SudokuColoring from './imgs/sudoku.png'
import Blank1 from './imgs/blank1.png'
import Blank2 from './imgs/blank2.png'
import Blank3 from './imgs/blank3.png'


const CartList = () => {
    const cartList = [
        <Cartridge 
            image = {SudokuColoring}
            title = 'SudokuColoring'
            link = ''
        />,
        <Cartridge 
            image = {Blank1}
            title='blank1'
            link = ''
        />,
        <Cartridge 
            image = {Blank2}
            title = 'blank2'
            link = ''
        />,
        <Cartridge 
            image = {Blank3}
            title = 'blank3'
            link = ''
        />
    ];

    const [cartIdx, setCartIdx] = useState(0)

    function changeCart(left) {
        setCartIdx(prev => {
            if (left) {
                return prev === 0 ? cartList.length - 1 : prev - 1;
            } else {
                return prev === cartList.length - 1 ? 0 : prev + 1;
            }
        });
    }

    return (
        <div className='cart-container'>

        <div className='cart-arrow'>
            <button onClick={() => changeCart(true)}>
                <img src={Left}></img>
            </button>
        </div>

        <div className='cart-display'>
            {cartList[cartIdx]}
        </div>
        
        <div className='cart-arrow'>
            <button onClick={() => changeCart(false)}>
                <img src={Right}></img>
            </button>
        </div>

        </div>
    );

}

export default CartList;