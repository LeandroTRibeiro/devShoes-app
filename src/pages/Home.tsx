import { Suspense, useEffect, useState } from 'react';

import { Apresentation } from '../components/Apresentation';
import { NavBar } from '../components/NavBar';
import { Product } from '../components/Product';
import { ShoppingCart } from '../components/ShoppingCart';
import { Payment } from '../components/Payment';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();
    
    const [closeApresentation, setCloseApresentation] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);
    const [openShoppingCart, setOpenShoppingCart] = useState(false);
    const [openPayment, setOpenPayment] = useState(false);
    const [openRightSide, setOpenRightSide] = useState(false);
    const [openLeftSide, setOpenLeftSide] = useState(false);

    useEffect(() => {

        const HandlerUnsupportedScreen = () => {
            if(window.innerWidth < 768) navigate('/mobile');
        };

        window.addEventListener("resize", HandlerUnsupportedScreen);

        HandlerUnsupportedScreen();

        return () => window.removeEventListener("resize", HandlerUnsupportedScreen);

    }, [])

    const HandlerCloseApresentation = () => {
        setCloseApresentation(!closeApresentation);
    };
    
    const HandlerOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
    
    const HandlerOpenShoppingCart = () => {
        setOpenShoppingCart(!openShoppingCart);
    };

    const HandlerOpenPayment = () => {
        setOpenPayment(!openPayment);
    };

    const HandlerOpenSide = (side: string) => {

        if(side === "restart") {
            setOpenLeftSide(false);
            setOpenRightSide(false);
            return;
        };
        if(side === "right") {
            setOpenLeftSide(false);
            setOpenRightSide(true);
            return;
        };

        setOpenRightSide(false);
        setOpenLeftSide(true);
    };
    
    return (
        <div className="bg-stone-200 w-screen h-screen flex overflow-hidden relative">

            <NavBar 
                closeApresentation={closeApresentation} 
                openMenu={openMenu} 
                HandlerOpenMenu={HandlerOpenMenu} 
                HandlerOpenSide={HandlerOpenSide}
            />

            {!closeApresentation && 
                <Apresentation 
                    HandlerCloseApresentation={HandlerCloseApresentation}
                />
            }

            <div 
                className={`w-screen h-screen justify-center items-center flex transition-all ease-in-out duration-300 
                    ${openMenu || openPayment ? 'blur-sm opacity-90' : ''}`}
                >

                <Suspense fallback={null}>
                    <Product 
                        closeApresentation={closeApresentation}
                        color={"blue"}
                        side={"right"}
                        openRightSide={openRightSide}
                        openLeftSide={openLeftSide}
                        HandlerOpenSide={HandlerOpenSide}
                        setOpenShoppingCart={HandlerOpenShoppingCart}
                        HandlerOpenPayment={HandlerOpenPayment}
                    />
                    <Product 
                        closeApresentation={closeApresentation}
                        color={"purple"}
                        side={"left"}
                        openRightSide={openRightSide}
                        openLeftSide={openLeftSide}
                        HandlerOpenSide={HandlerOpenSide}
                        setOpenShoppingCart={HandlerOpenShoppingCart}
                        HandlerOpenPayment={HandlerOpenPayment}
                    />
                </Suspense>

                <ShoppingCart 
                    openShoppingCart={openShoppingCart} 
                    setOpenShoppingCart={HandlerOpenShoppingCart} 
                    HandlerOpenPayment={HandlerOpenPayment} 
                />
            </div>

            <Payment 
                openPayment={openPayment} 
                HandlerOpenPayment={HandlerOpenPayment} 
                openShoppingCart={openShoppingCart}
                setOpenShoppingCart={HandlerOpenShoppingCart} 
            />
        </div>
    );
};