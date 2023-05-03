import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { addToCart } from '../redux/reducers/ShoppingCartReducer';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedSphere } from '../components/AnimatedSphere';
import { Fila } from '../components/Fila';

import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

export const Product = (props: {closeApresentation: boolean, color: string, side: string, openRightSide: boolean, openLeftSide: boolean, HandlerOpenSide: (side: string) => void, setOpenShoppingCart: () => void, HandlerOpenPayment: () => void}) => {

    const dispatch = useDispatch();

    const [autoRotate, setAutoRotate] = useState(false);

    let speedRotation = 5;
    const delayRotationTimer = 800;

    useEffect(() => {

        const timer = setTimeout(() => {
            const HandlerRotation = () => {
                if(props.side === "right" && props.openRightSide) {
                    setAutoRotate(true);
                    return;
                };
                if(props.side === "left" && props.openLeftSide) {
                    setAutoRotate(true);
                    return;
                };
                setAutoRotate(false);
            }
            HandlerRotation();            
        }, delayRotationTimer);

        return () => clearTimeout(timer);

    }, [props.openLeftSide, props.openRightSide]);

    const HandlerAddToShoppingCart = () => {

        dispatch(addToCart({
            productId: props.side === "right" ? 'snk1' : 'snk2', 
            amount: 1,
            stock: props.side === "left" ? 5 : 6,
            price: 78,
            delivery: 18,
            discount: 10, 
            name: 'NEW FILA SNEAKER', 
            description: 'XLTV-85', 
            side: props.side
        }));
        props.setOpenShoppingCart();
    };

    return (
        <div
            className={`flex items-center h-full transition-all ease-in-out duration-1000
                ${props.color === "blue" && !props.openLeftSide && !props.openRightSide ? 'bg-indigo-500' : props.color === 'purple' && !props.openLeftSide && !props.openRightSide ? 'bg-purple-500' : ''}
                ${props.side === "right" && props.openRightSide ? 'w-[95vw] bg-indigo-400' : 'w-[50vw]'}
                ${props.side === "left" && props.openRightSide ? 'mr-[-45vw] bg-indigo-600': ''}
                ${props.side === "right" && props.openLeftSide ? 'ml-[-45vw] bg-purple-800' : ''}
                ${props.side === "left" && props.openLeftSide ? 'w-[95vw] bg-purple-500': 'w-[50vw]'}`
            }
        >
            {props.side === "right" &&
                <>
                    <ChevronLeftIcon 
                        className={`absolute w-6 text-white cursor-pointer z-30 transition-all ease-in-out duration-200 hover:scale-150
                            ${!props.openLeftSide && !props.openRightSide ? 'ml-[calc(50vw-29px)]' : ''}
                            ${props.openRightSide ? 'ml-[calc(95vw-28px)]' : ''}
                            ${props.openLeftSide ? 'opacity-0' : ''}
                        `} 
                        onClick={() => props.HandlerOpenSide("left")} 
                    />
                    <XMarkIcon 
                        className={`absolute w-6 text-white cursor-pointer z-40 transition-all ease-in-out duration-500 hover:scale-150
                            ${!props.openLeftSide && !props.openRightSide ? 'opacity-0' : ''}
                            ${props.openRightSide ? 'opacity-100 ml-[calc(95vw+8px)]' : ''}
                            ${props.openLeftSide ? 'opacity-0' : ''}
                        `}
                        onClick={() => props.HandlerOpenSide("restart")}
                    />
                </>
            }
            {props.side === "left" &&
                <>
                    <ChevronRightIcon 
                        className={`absolute w-6 text-white cursor-pointer z-30 transition-all ease-in-out duration-200 hover:scale-150
                            ${!props.openLeftSide && !props.openRightSide ? 'ml-1' : ''}
                            ${props.openRightSide ? 'opacity-0' : ''}

                        `} 
                        onClick={() => props.HandlerOpenSide("right")} 
                    />
                    <XMarkIcon 
                        className={`absolute w-6 text-white cursor-pointer z-40 transition-all ease-in-out duration-500 hover:scale-150
                            ${!props.openLeftSide && !props.openRightSide ? 'invisible' : ''}
                            ${props.openLeftSide ? 'opacity-100 ml-[-28px]' : 'invisible'}
                        `}
                        onClick={() => props.HandlerOpenSide("restart")}
                    />
                </>
            }

            <div className="absolute flex scale-background w-[50%] h-[50%] justify-center items-center blur-sm">
                <Canvas>
                    <OrbitControls minDistance={0} enableZoom={false} autoRotate={true} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2,5,2]} intensity={1} />
                    <AnimatedSphere color={props.color === "blue" ? '#7DCBFF' : "#c64bdf"} />
                </Canvas>
            </div>
            <div 
                className={`absolute font-montserrat -mt-52 opacity-60 w-[50vw] flex flex-col items-center 
                    ${props.color === "blue" ? "text-indigo-700" : "text-purple-700"}`
                }
            >
                <div>
                    <h1
                        className={`text-7xl laptop:text-6xl font-extrabold
                            ${props.closeApresentation && props.side === "right" ? 'fade-sneaker1' : props.closeApresentation && props.side === "left" ? 'fade-sneaker3' : ''}`
                        }>
                            PERFECT
                    </h1>
                    <h2
                        className={`font-semibold
                            ${props.closeApresentation && props.side === "right" ? 'fade-sneaker2' : props.closeApresentation && props.side === "left" ? 'fade-sneaker4' : ''}`
                        }>
                            SNEAKERS.
                    </h2>
                </div>
            </div>
            <div 
                className="absolute font-montserrat mt-40 text-white opacity-60 w-[50vw] flex flex-col items-center">
                <div>
                    <h1
                        className={`text-8xl laptop:text-6xl font-extrabold
                            ${props.closeApresentation && props.side === "right" ? 'fade-sneaker1' : props.closeApresentation && props.side === "left" ? 'fade-sneaker3' : ''}`
                        }>
                            SHOES
                    </h1>
                    <h2
                        className={`text-6xl laptop:text-4xl font-extrabold
                            ${props.closeApresentation && props.side === "right" ? 'fade-sneaker2' : props.closeApresentation && props.side === "left" ? 'fade-sneaker4' : ''}`
                        }>
                            COMFORTABLE
                    </h2>
                </div>
            </div>
            <div className='w-[50vw] h-[75vh]'>
                <Canvas
                    className={`cursor-pointer transition-all duration-1000 ease-in-out
                        ${props.color === "blue" ? "" : "hue-rotate-60"}
                        ${props.side === "right" && props.openRightSide ? 'scale-125' : ''}
                        ${props.side === "left" && props.openLeftSide ? 'scale-125' : ''}
                        ${!props.openLeftSide && !props.openRightSide ? '' : ''}`
                    }
                >
                    <OrbitControls minDistance={250} maxDistance={250} autoRotate={autoRotate} autoRotateSpeed={speedRotation} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2,5,2]} intensity={1} />
                    <Fila />
                </Canvas>
            </div>

            {props.openRightSide && props.side === "right" &&
                <div className='w-[40vw] h-screen flex flex-col justify-center gap-7 laptop:gap-3 font-montserrat z-40'>
                    <div>
                        <h1 className='text-4xl laptop:text-3xl font-extrabold text-stone-200 fade-product-info pb-2 tablet:pb-1 border-b-2 mb-2 laptop:mb-1 border-yellow-400'>NEW FILA SNEAKER</h1>
                        <h2 className='font-semibold text-indigo-700 fade-product-info-reverse'>XLTV-85</h2>
                    </div>
                    <div className='flex flex-col text-indigo-700 font-semibold fade-product-info'>
                        <div className='flex gap-2 items-center'>
                            <span className='line-through text-lg'>$78</span>
                            <span>10%OFF</span>
                        </div>
                        <span className='opacity-80 text-7xl laptop:text-6xl font-extrabold'>$70.20</span>
                    </div>
                    <p className='text-stone-800 fade-product-info-reverse laptop:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptas accusamus sunt voluptatibus repellat ipsam, ducimus iusto fugit amet odio placeat, distinctio ipsum inventore quibusdam obcaecati velit eius, fugiat ratione!</p>
                    <div className='flex gap-5 fade-product-info'>
                        <button className='transition-all ease-in-out duration-300 border-2 border-indigo-700 bg-indigo-700 text-stone-200 w-fit py-2 px-5 rounded-lg hover:bg-transparent hover:text-indigo-700 font-semibold' onClick={props.HandlerOpenPayment}>
                            BUY NOW
                        </button>
                        <button className='transition-all ease-in-out duration-300 border-2 border-indigo-700 text-indigo-700 font-semibold w-fit py-2 px-5 rounded-lg hover:bg-indigo-700 hover:text-stone-200' onClick={HandlerAddToShoppingCart}>
                            ADD CART
                        </button>
                    </div>
                </div>
            }

            {props.openLeftSide && props.side === "left"  &&
                <div className='w-[40vw] h-screen flex flex-col justify-center laptop:gap-3 gap-7 font-montserrat z-40'>
                    <div>
                        <h1 className='text-4xl laptop:text-3xl font-extrabold text-stone-200 fade-product-info pb-2 laptop:pb-1 border-b-2 mb-2 laptop:mb-2 border-lime-400'>NEW FILA SNEAKER</h1>
                        <h2 className='font-semibold text-purple-800 fade-product-info-reverse'>XLTV-85</h2>
                    </div>
                    <div className='flex flex-col text-purple-800 font-semibold fade-product-info'>
                        <div className='flex gap-2 items-center'>
                            <span className='line-through text-lg'>$78</span>
                            <span>10%OFF</span>
                        </div>
                        <span className='opacity-80 text-7xl laptop:text-6xl font-extrabold'>$70.20</span>
                    </div>
                    <p className='text-stone-800 fade-product-info-reverse laptop:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero voluptas accusamus sunt voluptatibus repellat ipsam, ducimus iusto fugit amet odio placeat, distinctio ipsum inventore quibusdam obcaecati velit eius, fugiat ratione!</p>
                    <div className='flex gap-5 fade-product-info'>
                        <button className='font-sans transition-all ease-in-out duration-300 border-2 border-purple-800 bg-purple-800 text-stone-200 w-fit py-2 px-5 rounded-lg hover:bg-transparent hover:text-purple-800 font-semibold' onClick={props.HandlerOpenPayment}>
                            BUY NOW
                        </button>
                        <button className='font-sans transition-all ease-in-out duration-300 border-2 border-purple-800 text-purple-800 font-semibold w-fit py-2 px-5 rounded-lg hover:bg-purple-800 hover:text-stone-200' onClick={HandlerAddToShoppingCart}>
                            ADD CART
                        </button>
                    </div>
                </div>
            }

        </div>
    );
};