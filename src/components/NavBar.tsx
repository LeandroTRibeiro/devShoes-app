import { Link } from 'react-router-dom';

import  Hamburger from 'hamburger-react';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

import { ArrowLeftOnRectangleIcon, ClipboardDocumentListIcon, HeartIcon, KeyIcon, NewspaperIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const NavBar = (props: {openMenu: boolean, HandlerOpenMenu: () => void, closeApresentation: boolean, HandlerOpenSide: (side: string) => void}) => {

    return (

        <div className='fixed w-screen h-fit p-2 flex justify-center items-center text-black z-50'>
            <div 
                className="z-10 absolute left-2 top-2 transition-all duration-500 ease-in-out">
                <Hamburger 
                    color="#fff" 
                    easing="ease-in" 
                    rounded 
                    label="Show menu" 
                    toggled={props.openMenu} 
                    toggle={() => props.HandlerOpenMenu()}
                />
            </div>

            <nav 
                className={`absolute top-0 w-screen h-screen backdrop-blur-x1 bg-indigo-300/60 transition-all duration-500 ease-in-out shadow-2xl shadow-white 
                    ${props.openMenu ? 'left-0' : 'left-[-100vw]'}`
                }
            >
                <div>
                    <ul className='h-screen flex flex-col gap-5 justify-center font-montserrat text-lg text-white overflow-hidden'>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-1' : ''}`
                                }
                            >
                                <KeyIcon className='w-6'/>
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-2' : ''}`
                                }
                            >
                                <ClipboardDocumentListIcon className='w-6'/>
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-3' : ''}`
                                }
                            >
                                <HeartIcon className='w-6' />
                                Wishs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-4' : ''}`
                                }
                            >
                                <ShoppingCartIcon className='w-6' />
                                Shopping Cart
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-5' : ''}`
                                }
                            >
                                <NewspaperIcon className='w-6' />
                                What is new?
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/" 
                                className={`flex items-center gap-5 w-fit hover:scale-125 py-5 px-20  transition-all ease-in-out duration-300 
                                    ${props.openMenu ? 'fade-menu-6' : ''}`
                                }
                            >
                                <ArrowLeftOnRectangleIcon className='w-6' /> 
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Link to="/" className='flex items-center justify-center gap-2 transition-all duration-100 z-50 ease-in-out hover:brightness-125 active:scale-125' onClick={() => props.HandlerOpenSide("restart")}>
                <img src={logo} alt="logo" className='w-20'/>
                <div className={`absolute flex items-center gap-2 ml-[160px] ${props.closeApresentation ? 'fade-menu-5' : ''}`}>
                    <h1 className='font-montserrat font-semibold'>DIAMOND</h1>
                    <h2 className='font-montserrat font-thin text-xs'>SNEAKERS.</h2>
                </div>
            </Link>
            <div className='absolute right-2 top-2'>
                <img src={avatar} alt="avatar" className='w-12 border-2 rounded-full border-purple-700'/>
            </div>
        </div>
    );
};