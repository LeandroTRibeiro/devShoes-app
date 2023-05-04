import { useState } from 'react';

import { useAppSelector } from '../redux/hooks/useAppSelector';

import mastercard from '../assets/svgs/Mastercard-logo.svg';
import chip from '../assets/images/chip.png';

import { PencilIcon, WifiIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const Payment = (props: {openPayment: boolean, HandlerOpenPayment: () => void, setOpenShoppingCart: () => void, openShoppingCart: boolean}) => {

    const shoppingCartReducer = useAppSelector(state => state.shoppingCartReducer.products);

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardExpriresMonth, setCardExpiresMonth] = useState('');
    const [cardExpriresYear, setCardExpiresYear] = useState('');
    const [cardCVC, setCardCVC] = useState('');

    const [turnCard, setTurnCard] = useState(false);

    const HandlerCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 16;
        setCardNumber(e.target.value.slice(0, limit));
    };

    const handlerCardExpiresMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 2;
        setCardExpiresMonth(e.target.value.slice(0, limit));
    };

    const handlerCardExpiresYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 2;
        setCardExpiresYear(e.target.value.slice(0, limit));
    };

    const HandlerCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 3;
        setCardCVC(e.target.value.slice(0, limit));
    };

    const HandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const HandlerEditBill = () => {
        props.HandlerOpenPayment();
        if(!props.openShoppingCart) props.setOpenShoppingCart();
    };

    return (

        <div className={`absolute w-screen h-screen transition-all ease-in-out duration-700 backdrop-blur-x1 bg-white/25 flex flex-col justify-center items-center p-5 z-50 ${props.openPayment ? 'top-0' : 'top-[-100vh]'}`}>
            <div className='w-[85vw] max-h-screen bg-white rounded-lg flex justify-center items-center p-5 gap-10'>
                <div className='flex-1 flex flex-col gap-5 laptop:gap-3 items-center justify-center pb-0'>
                    <div className={`w-[450px] h-[250px] laptop:w-[350px] laptop:h-[200px] bg-black bg-card-background rounded-2xl shadow-md shadow-black border-r-[1px] border-b-[1px] border-stone-800 flex justify-center items-center transition-all ease-in-out duration-500 ${turnCard ? 'turn-card' : ''}`}>
                        <div className={`w-full h-full p-5 flex flex-col justify-between transition-all ease-in-out duration-75 ${turnCard ? 'turn-card-into opacity-0' : ''}`}>
                            <div className="flex justify-between">
                                <div className='flex items-center'>
                                    <img src={chip} alt="chip card" className='w-12 laptop:w-10' />
                                    <WifiIcon className='text-white w-7 rotate-90'/>
                                </div>
                                <div>
                                    <img src={mastercard} alt="master card logo" className='w-16 laptop:w-12' />
                                </div>
                            </div>
                            <div>
                                <div className='text-white font-semibold font-montserrat text-2xl laptop:text-xl flex gap-9 laptop:gap-7 tracking-widest'>
                                    <div className='flex gap-5 laptop:gap-4'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber &&
                                                <span className='absolute fade-card-into'>{cardNumber[0]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[1] &&
                                                <span className='absolute fade-card-into'>{cardNumber[1]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[2] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[2] &&
                                                <span className='absolute fade-card-into'>{cardNumber[2]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[3] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[3] &&
                                                <span className='absolute fade-card-into'>{cardNumber[3]}</span>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-5 laptop:gap-4'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[4] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[4] &&
                                                <span className='absolute fade-card-into'>{cardNumber[4]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[5] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[5] &&
                                                <span className='absolute fade-card-into'>{cardNumber[5]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[6] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[6] &&
                                                <span className='absolute fade-card-into'>{cardNumber[6]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[7] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[7] &&
                                                <span className='absolute fade-card-into'>{cardNumber[7]}</span>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-5 laptop:gap-4'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[8] &&
                                                <span className='absolute fade-card-into'>{cardNumber[8]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[9] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[9] &&
                                                <span className='absolute fade-card-into'>{cardNumber[9]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[10] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[10] &&
                                                <span className='absolute fade-card-into'>{cardNumber[10]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[11] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[11] &&
                                                <span className='absolute fade-card-into'>{cardNumber[11]}</span>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-5 laptop:gap-4'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[12] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[12] &&
                                                <span className='absolute fade-card-into'>{cardNumber[12]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[13] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[13] &&
                                                <span className='absolute fade-card-into'>{cardNumber[13]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[14] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[14] &&
                                                <span className='absolute fade-card-into'>{cardNumber[14]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardNumber[15] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                            {cardNumber[15] &&
                                                <span className='absolute fade-card-into'>{cardNumber[15]}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='text-white font-light'>Card Holder</div>
                                    <div className='text-white h-7 text-lg flex laptop:text-base items-center gap-[13px] laptop:gap-3'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>F</span>
                                            {cardHolder &&
                                                <span className='absolute fade-card-into'>{cardHolder[0]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>U</span>
                                            {cardHolder[1] &&
                                                <span className='absolute fade-card-into'>{cardHolder[1]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[2] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>L</span>
                                            {cardHolder[2] &&
                                                <span className='absolute fade-card-into'>{cardHolder[2]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[3] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>L</span>
                                            {cardHolder[3] &&
                                                <span className='absolute fade-card-into'>{cardHolder[3]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[4] ? 'fade-card-exit invisible' : 'fade-card-into'}`}> </span>
                                            {cardHolder[4] &&
                                                <span className='absolute fade-card-into'>{cardHolder[4]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[5] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>N</span>
                                            {cardHolder[5] &&
                                                <span className='absolute fade-card-into'>{cardHolder[5]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[6] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>A</span>
                                            {cardHolder[6] &&
                                                <span className='absolute fade-card-into'>{cardHolder[6]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[7] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>M</span>
                                            {cardHolder[7] &&
                                                <span className='absolute fade-card-into'>{cardHolder[7]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>E</span>
                                            {cardHolder[8] &&
                                                <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                            }
                                        </div>
                                        {cardHolder.slice(9).split("").map((item, index) => (
                                            <div key={index} className='flex justify-center items-center'>
                                                <span className='absolute fade-card-into'>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className='text-white font-light'>Expires</div>
                                    <div className='text-white text-lg laptop:text-base h-7 flex items-center gap-[13px] laptop:gap-3'>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardExpriresMonth[0] ? 'fade-card-exit invisible' : 'fade-card-into mr-2'}`}>M</span>
                                            {cardExpriresMonth[0] &&
                                                <span className='absolute fade-card-into'>{cardExpriresMonth[0]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardExpriresMonth[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>M</span>
                                            {cardExpriresMonth[1] &&
                                                <span className='absolute fade-card-into'>{cardExpriresMonth[1]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className='absolute'>/</span>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardExpriresYear[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>Y</span>
                                            {cardExpriresYear[0] &&
                                                <span className='absolute fade-card-into'>{cardExpriresYear[0]}</span>
                                            }
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <span className={`absolute transition-all duration-300 ease-in-out ${cardExpriresYear[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>Y</span>
                                            {cardExpriresYear[1] &&
                                                <span className='absolute fade-card-into'>{cardExpriresYear[1]}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[450px] laptop:w-[350px] h-[250px] laptop:h-[200px] absolute flex flex-col justify-between transition-all ease-in-out duration-75  ${turnCard ? 'turn-card-into-reverse' : 'turn-card-into opacity-0'}`}>
                            <div className='w-full h-16 mt-5 bg-stone-800'></div>
                            <div className='absolute mt-24 right-5 text-white text-xl laptop:text-lg font-montserrat flex gap-4'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-300 ease-in-out ${cardCVC[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>C</span>
                                    {cardCVC &&
                                        <span className='absolute fade-card-into'>{cardCVC[0]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-300 ease-in-out ${cardCVC[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>V</span>
                                    {cardCVC[1] &&
                                        <span className='absolute fade-card-into'>{cardCVC[1]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-300 ease-in-out ${cardCVC[2] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>C</span>
                                    {cardCVC[2] &&
                                        <span className='absolute fade-card-into'>{cardCVC[2]}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="POST" className='flex flex-col gap-5 laptop:gap-3 items-center' onSubmit={HandlerSubmit}>
                        <label className='flex flex-col'>
                            <span className=''>Card Number <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                            <input 
                                type="number" 
                                name="card-number"
                                id="card-number" 
                                className='w-[450px] laptop:w-[350px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                placeholder='0000 0000 0000 0000'
                                value={cardNumber}
                                onChange={HandlerCardNumber}
                                minLength={16}
                                maxLength={16}
                                required
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className=''>Card Holder <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                            <input 
                                type="text" 
                                name="card-text" 
                                id="card-text" 
                                className='w-[450px] laptop:w-[350px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                placeholder='FULL NAME'
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                                required
                            />
                        </label>
                        <div className='flex gap-10'>
                            <label className='flex flex-col'>
                                <span className=''>Card Expires <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                                <div className='flex items-center gap-5'>
                                    <input
                                        type="number"
                                        name="card-expires-month"
                                        id="card-expires-month"
                                        className='w-[80px] laptop:w-[60px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                        placeholder='MONTH'
                                        value={cardExpriresMonth}
                                        onChange={handlerCardExpiresMonth}
                                        min={1}
                                        max={12}
                                        required
                                    />
                                    <span className='text-xl font-semibold'>/</span>
                                    <input
                                        type="number"
                                        name="card-expires-month"
                                        id="card-expires-month"
                                        className='w-[80px] laptop:w-[60px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                        placeholder='YEAR'
                                        value={cardExpriresYear}
                                        onChange={handlerCardExpiresYear}
                                        min={23}
                                        max={99}
                                        required
                                    />
                                </div>
                            </label>
                            <label className='flex flex-col'>
                                <span>CVC Number <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                                <input 
                                    type="number" 
                                    name="card-cvc" 
                                    id="card-cvc" 
                                    className='w-[205px] laptop:w-[140px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                    placeholder='000'
                                    onFocus={() => setTurnCard(true)}
                                    onBlur={() => setTurnCard(false)}
                                    value={cardCVC}
                                    onChange={HandlerCardCVC}
                                />
                            </label>
                        </div>
                        <button className='w-[450px] laptop:w-[350px] font-sans text-base transition-all ease-in-out duration-300 border-2 border-purple-500 bg-purple-500 text-stone-200 py-2 rounded-lg hover:bg-transparent hover:text-purple-500 font-semibold'>BUY</button>
                    </form>
                </div>
                <div className='flex-1 h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex items-center justify-between w-full border-dashed border-b border-stone-800 pb-5'>
                            <h1 className='font-montserrat text-2xl font-extrabold text-stone-800 tracking-widest'>BILL</h1>
                            <div className='flex items-center gap-2'>
                                <PencilIcon className='text-stone-800 w-7 cursor-pointer transition-all ease-in-out duration-100 hover:scale-125 active:scale-50 z-20' onClick={HandlerEditBill}/>
                                <XMarkIcon className='text-stone-800 w-9 cursor-pointer transition-all ease-in-out duration-100 hover:scale-125 active:scale-50 z-20' onClick={props.HandlerOpenPayment}/>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 py-3 border-dashed border-b border-stone-800 text-stone-800 font-montserrat font-semibold'>
                            <div className=''>AMOUNT</div>
                            <div className=''>PRODUCT</div>
                            <div className='flex justify-end'>PRICE</div>
                        </div>
                        {shoppingCartReducer.map((item, index) => (
                            
                            <div key={index} className='grid grid-cols-3 py-9 text-stone-800 font-montserrat'>
                                <div className=''>{item.amount}</div>
                                <div className='laptop:text-sm'>{item.name}</div>
                                <div className='flex justify-end'>${(item.amount * (item.price - (item.price * (item.discount / 100)) + item.delivery)).toFixed(2)}</div>
                            </div>
                            
                        ))}
                    </div>
                    <div className='flex justify-end pt-3 border-dashed border-t border-stone-800 text-stone-800 font-montserrat font-semibold text-xl'>
                        TOTAL PRICE: ${shoppingCartReducer.reduce((acc, item) => acc + (item.amount *(item.price - (item.price * (item.discount / 100)) + item.delivery)), 0).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};