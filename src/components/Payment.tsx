import { WifiIcon } from '@heroicons/react/24/outline';
import mastercard from '../assets/images/Mastercard-logo.svg';
import chip from '../assets/images/chip2.png';

export const Payment = (props: {openPayment: boolean, HandlerOpenPayment: () => void}) => {
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
                        <div className='text-white font-semibold font-montserrat text-2xl flex gap-6 tracking-widest'>
                            <div>####</div>
                            <div>####</div>
                            <div>####</div>
                            <div>####</div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='text-white font-light'>Card Holder</div>
                            <div className='text-white text-lg tracking-widest'>FULL NAME</div>
                        </div>
                        <div>
                            <div className='text-white font-light'>Expires</div>
                            <div className='text-white text-lg tracking-widest'>MM/YY</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80vw] h-[70vh] bg-white -mt-20 rounded-lg flex justify-center p-5'>
                <div className='flex-1 mt-24'>FORM</div>
                <div className='flex-1'>BILL</div>
            </div>
        </div>
    );
};