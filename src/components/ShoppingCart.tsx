import React from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { addAmount, delAmount, deleteToCart } from '../redux/reducers/ShoppingCartReducer';

import fila from '../assets/images/fila.png';

import { MinusIcon, PlusIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const ShoppingCart = (props: {setOpenShoppingCart: () => void, openShoppingCart: boolean, HandlerOpenPayment: () => void}) => {

    const shoppingCartReducer = useAppSelector(state => state.shoppingCartReducer.products);

    const dispatch = useDispatch();

    const HandlerDeleteProduct = (productId: string) => {
        dispatch(deleteToCart(productId));
    };

    const HandlerAddAmount = (productId: string, stock: number, amount: number) => {
        if(amount < stock) dispatch(addAmount(productId));
    };

    const HandlerDelAmount = (productId: string, stock: number, amount: number) => {
        if(amount > 1) dispatch(delAmount(productId));
    };

    return (

        <div 
            className={`absolute w-screen h-screen bg-stone-200 transition-all duration-700 ease-in-out z-40 flex justify-center items-center p-8 pt-20 shadow-lg shadow-black
                ${props.openShoppingCart ? 'top-0' : 'top-[100vh]'}
            `}
        >
            <div>
                <div className="pb-5 border-b-2 border-stone-800">
                    <div className='flex justify-between items-center'>
                        <h1 className="font-montserrat font-extrabold text-3xl text-stone-800">MY SHOPPING CART</h1>
                        <XMarkIcon className='w-9 cursor-pointer transition-all ease-in-out duration-100 hover:scale-125 active:scale-50' onClick={props.setOpenShoppingCart}/>
                    </div>
                    <div className='grid grid-cols-shopping mt-5 font-semibold gap-3'>
                        <span className='w-full flex justify-center'>Product</span>
                        <span className='w-full flex justify-center'>Name</span>
                        <span className='w-full flex justify-center'>Amount</span>
                        <span className='w-full flex justify-center'>Size</span>
                        <span className='w-full flex justify-center'>Price</span>
                        <span className='w-full flex justify-center'>Discount</span>
                        <span className='w-full flex justify-center'>Delivery</span>
                        <span className='w-full flex justify-center'>Total</span>
                    </div>
                </div>
                <div className='grid grid-cols-shopping gap-3 items-center pb-5 border-b-2 border-stone-800'>
                    {shoppingCartReducer.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='w-full flex justify-center'>
                                    <img src={fila} alt="fila" className={`w-36 drop-shadow-lg ${item.side === 'left' ? 'hue-rotate-60' : ''}`}/>
                                </div>
                            <div className='w-full flex flex-col items-center'>
                                <span className='text-sm'>{item.name}</span>
                                <span>{item.description}</span>
                            </div>
                            <div className='w-full flex flex-col justify-center items-center gap-2'>
                                <div className='flex gap-3 select-none	'>
                                    <MinusIcon className='w-5 cursor-pointer hover:scale-125 active:scale-50 transition-all ease-in-out duration-100' onClick={() => HandlerDelAmount(item.productId, item.stock, item.amount)} />
                                    {item.amount}
                                    <PlusIcon className='w-5 cursor-pointer hover:scale-125 active:scale-50 transition-all ease-in-out duration-100' onClick={() => HandlerAddAmount(item.productId, item.stock, item.amount)} />
                                </div>
                                <span className='font-thin'>{item.stock} available</span>
                            </div>
                            <div className='w-full flex justify-center'>
                                <select name="size" id="size" className='bg-transparent px-5 py-2 border border-stone-800 flex rounded-lg'>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="42">43</option>
                                </select>
                            </div>
                            <div className='w-full flex justify-center'>
                                ${item.amount * item.price}
                            </div>
                            <div className='w-full flex justify-center'>
                                ${(item.amount * (item.price * (item.discount / 100))).toFixed(2)}
                            </div>
                            <div className='w-full flex justify-center'>
                                ${item.amount * item.delivery}
                            </div>
                            <div className='font-semibold w-full flex justify-center'> 
                                ${(item.amount * (item.price - (item.price * (item.discount / 100)) + item.delivery)).toFixed(2)}
                            </div>
                            <div className='font-semibold w-full flex justify-center'>
                                <TrashIcon className='w-6 text-red-500 transition-all ease-in-out duration-100 cursor-pointer hover:scale-125 active:scale-50' onClick={() => HandlerDeleteProduct(item.productId)}/>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div className='w-full flex justify-end'>
                    <div className='flex flex-col mt-5 w-fit text-green-500 gap-1'>
                        <div className='flex items-end font-semibold text-3xl gap-3'>
                            <div className='font-normal text-base'>TOTAL PRICE</div>
                            ${shoppingCartReducer.reduce((acc, item) => acc + (item.amount *(item.price - (item.price * (item.discount / 100)) + item.delivery)), 0).toFixed(2)}
                        </div>
                        <button className='font-sans text-base transition-all ease-in-out duration-300 border-2 border-green-500 bg-green-500 text-stone-200 py-2 rounded-lg hover:bg-transparent hover:text-green-500 font-semibold' onClick={props.HandlerOpenPayment}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};