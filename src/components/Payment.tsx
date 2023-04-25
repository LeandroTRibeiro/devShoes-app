import { WifiIcon } from '@heroicons/react/24/outline';
import mastercard from '../assets/images/Mastercard-logo.svg';
import chip from '../assets/images/chip2.png';
import { useState } from 'react';

export const Payment = (props: {openPayment: boolean, HandlerOpenPayment: () => void}) => {

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardExprires, setCardExpires] = useState('');
    const [cardCVC, setCardCVC] = useState('');

    const HandlerCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 16;
        setCardNumber(e.target.value.slice(0, limit));
    };
    const handlerCardExpires = (e: React.ChangeEvent<HTMLInputElement>) => {
        const limit = 4;
        setCardExpires(e.target.value.slice(0, limit));
    };

    return (

        <div className={`absolute w-screen h-screen transition-all ease-in-out duration-700 backdrop-blur-x1 bg-white/25 flex flex-col items-center p-5 z-50 ${props.openPayment ? 'top-0' : 'top-[-100vh]'}`}>
            <div className='w-[75vw] z-10'>
                <div className="w-[450px] h-[250px] bg-black bg-card-background rounded-2xl shadow-md shadow-black border-r-[1px] border-b-[1px] border-stone-800 p-5 flex flex-col justify-between ">
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img src={chip} alt="chip card" className='w-12' />
                            <WifiIcon className='text-white w-7 rotate-90'/>
                        </div>
                        <div>
                            <img src={mastercard} alt="master card logo" className='w-16' />
                        </div>
                    </div>
                    <div>
                        <div className='text-white font-semibold font-montserrat text-2xl flex gap-9 tracking-widest'>
                            <div className='flex gap-5'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber &&
                                        <span className='absolute fade-card-into'>{cardNumber[0]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[1] &&
                                        <span className='absolute fade-card-into'>{cardNumber[1]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[2] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[2] &&
                                        <span className='absolute fade-card-into'>{cardNumber[2]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[3] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[3] &&
                                        <span className='absolute fade-card-into'>{cardNumber[3]}</span>
                                    }
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[4] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[4] &&
                                        <span className='absolute fade-card-into'>{cardNumber[4]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[5] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[5] &&
                                        <span className='absolute fade-card-into'>{cardNumber[5]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[6] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[6] &&
                                        <span className='absolute fade-card-into'>{cardNumber[6]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[7] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[7] &&
                                        <span className='absolute fade-card-into'>{cardNumber[7]}</span>
                                    }
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[8] &&
                                        <span className='absolute fade-card-into'>{cardNumber[8]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[9] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[9] &&
                                        <span className='absolute fade-card-into'>{cardNumber[9]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[10] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[10] &&
                                        <span className='absolute fade-card-into'>{cardNumber[10]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[11] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[11] &&
                                        <span className='absolute fade-card-into'>{cardNumber[11]}</span>
                                    }
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[12] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[12] &&
                                        <span className='absolute fade-card-into'>{cardNumber[12]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[13] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[13] &&
                                        <span className='absolute fade-card-into'>{cardNumber[13]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[14] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
                                    {cardNumber[14] &&
                                        <span className='absolute fade-card-into'>{cardNumber[14]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardNumber[15] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>#</span>
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
                            <div className='text-white h-7 text-lg flex items-center gap-[13px]'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[0] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>F</span>
                                    {cardHolder &&
                                        <span className='absolute fade-card-into'>{cardHolder[0]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[1] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>U</span>
                                    {cardHolder[1] &&
                                        <span className='absolute fade-card-into'>{cardHolder[1]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[2] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>L</span>
                                    {cardHolder[2] &&
                                        <span className='absolute fade-card-into'>{cardHolder[2]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[3] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>L</span>
                                    {cardHolder[3] &&
                                        <span className='absolute fade-card-into'>{cardHolder[3]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[4] ? 'fade-card-exit invisible' : 'fade-card-into'}`}> </span>
                                    {cardHolder[4] &&
                                        <span className='absolute fade-card-into'>{cardHolder[4]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[5] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>N</span>
                                    {cardHolder[5] &&
                                        <span className='absolute fade-card-into'>{cardHolder[5]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[6] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>A</span>
                                    {cardHolder[6] &&
                                        <span className='absolute fade-card-into'>{cardHolder[6]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[7] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>M</span>
                                    {cardHolder[7] &&
                                        <span className='absolute fade-card-into'>{cardHolder[7]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>E</span>
                                    {cardHolder[8] &&
                                        <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                    }
                                </div>
                                {cardHolder.slice(9).split("").map((item) => (
                                    <div className='flex justify-center items-center'>
                                        <span className='absolute fade-card-into'>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='text-white font-light'>Expires</div>
                            <div className='text-white text-lg h-7 flex items-center gap-[13px]'>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into mr-2'}`}>M</span>
                                    {cardHolder[8] &&
                                        <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>M</span>
                                    {cardHolder[8] &&
                                        <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className='absolute'>/</span>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>Y</span>
                                    {cardHolder[8] &&
                                        <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                    }
                                </div>
                                <div className='flex justify-center items-center'>
                                    <span className={`absolute transition-all duration-500 ease-in-out ${cardHolder[8] ? 'fade-card-exit invisible' : 'fade-card-into'}`}>Y</span>
                                    {cardHolder[8] &&
                                        <span className='absolute fade-card-into'>{cardHolder[8]}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80vw] h-[70vh] bg-white -mt-20 rounded-lg flex justify-center p-5'>
                <div className='flex-1 p-10 pl-3 pt-24'>
                    <form action="POST" className='flex flex-col gap-5'>
                        <label>
                            <span className=''>Card Number <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                            <input 
                                type="number" 
                                name="card-number"
                                id="card-number" 
                                className='w-[450px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                value={cardNumber}
                                onChange={HandlerCardNumber}
                            />
                        </label>
                        <label>
                            <span className=''>Card Holder <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                            <input 
                                type="text" 
                                name="card-text" 
                                id="card-text" 
                                className='w-[450px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                            />
                        </label>
                        <div className='flex gap-10'>
                            <label className='flex flex-col'>
                                <span className=''>Card Expires <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                                <input
                                    type="month"
                                    name="card-expires"
                                    id="card-expires"
                                    className='w-[205px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                    value={cardExprires}
                                    onChange={handlerCardExpires}
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span>CVC Number <span className='text-red-500 font-bold cursor-pointer'>*</span></span>
                                <input 
                                    type="number" 
                                    name="card-cvc" 
                                    id="card-cvc" 
                                    className='w-[205px] outline-none border border-stone-800 rounded-md px-2 py-2'
                                />
                            </label>
                        </div>
                    </form>
                </div>
                <div className='flex-1'>BILL</div>
            </div>
        </div>
    );
};