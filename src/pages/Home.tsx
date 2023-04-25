import { Suspense, useMemo, useState } from 'react';

import { Apresentation } from '../components/Apresentation';
import { NavBar } from '../components/NavBar';
import { TouchHere } from '../components/TouchHere';
import { Product } from '../components/Product';
import { ShoppingCart } from '../components/ShoppingCart';
import { Payment } from '../components/Payment';

export const Home = () => {

    const [closeApresentation, setCloseApresentation] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);

    const [openShoppingCart, setOpenShoppingCart] = useState(false);

    const [openPayment, setOpenPayment] = useState(false);

    const [blurPage, setBlurPage] = useState(false);

    const [openRightSide, setOpenRightSide] = useState(false);
    const [openLeftSide, setOpenLeftSide] = useState(false);


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

    const HandlerBlurPage = () => {
        setBlurPage(!blurPage);
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
            <NavBar openMenu={openMenu} closeApresentation={closeApresentation} HandlerOpenMenu={HandlerOpenMenu} HandlerOpenSide={HandlerOpenSide}/>
            <Apresentation closeApresentation={closeApresentation} HandlerCloseApresentation={HandlerCloseApresentation}/>
            <TouchHere closeApresentation={closeApresentation} blurPage={blurPage} setBlurPage={HandlerBlurPage}/>
            <div className={`w-screen h-screen justify-center items-center flex transition-all ease-in-out duration-300 ${openMenu || openPayment ? 'blur-sm opacity-90' : ''} ${blurPage ? 'blur-sm opacity-90' : ''}`}>
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
                        color={"green"}
                        side={"left"}
                        openRightSide={openRightSide}
                        openLeftSide={openLeftSide}
                        HandlerOpenSide={HandlerOpenSide}
                        setOpenShoppingCart={HandlerOpenShoppingCart}
                        HandlerOpenPayment={HandlerOpenPayment}
                    />
                </Suspense>
                <ShoppingCart setOpenShoppingCart={HandlerOpenShoppingCart} openShoppingCart={openShoppingCart} />
            </div>
            <Payment openPayment={openPayment} HandlerOpenPayment={HandlerOpenPayment}/>
        </div>
    );
};