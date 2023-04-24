import { useEffect, useState } from 'react';

import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export const TouchHere = (props: {closeApresentation: boolean, blurPage: boolean, setBlurPage: () => void}) => {

    const [showTouchAnimation, setTouchAnimation] = useState(false);

    const startTouchAnimationTimer = 2000;
    const stopeTouchAnimationTimer = 2500;

    useEffect(() => {
        let timer: number;
        if(props.closeApresentation && !showTouchAnimation) {
            timer = setTimeout(() => {
                setTouchAnimation(true);
                props.setBlurPage();
            }, startTouchAnimationTimer);
        }
        return () => clearTimeout(timer);

    }, [props.closeApresentation]);

    useEffect(() => {
        let timer: number;
        if(props.closeApresentation && showTouchAnimation && props.blurPage) {
            timer = setTimeout(() => {
                setTouchAnimation(false);
                props.setBlurPage();
            }, stopeTouchAnimationTimer);
        };

        return () => clearTimeout(timer);

    }, [props.closeApresentation, showTouchAnimation, props.blurPage]);

    return (
        <div className={`absolute w-[50vw] h-screen justify-center items-center ${showTouchAnimation ? 'flex' : 'hidden'}`}>
            <div className="absolute flex justify-end items-end w-72 h-72 z-30 touch">
                <span className="absolute animate- flex justify-center items-center h-10 w-10">
                    <span className="absolute animate-ping inline-flex h-5 w-5 rounded-full bg-stone-700"></span>
                    <span className="absolute animate-ping inline-flex h-7 w-7 rounded-full bg-stone-400"></span>
                    <span className="absolute animate-ping inline-flex h-8 w-8 rounded-full bg-stone-200"></span>
                    <span className="inline-flex rounded-full h-4 w-4 bg-stone-800 z-30"></span>
                </span>
            </div>
            <span className={`absolute flex-col justify-center items-center text-center z-30 font-montserrat font-semibold ${showTouchAnimation ? 'flex' : 'hidden'}`}>
                <ArrowUpIcon className='w-8'/> 
                <div className='flex justify-center items-center gap-2'>
                    <ArrowLeftIcon className='w-8' />
                    TOUCH HERE!
                    <ArrowRightIcon className='w-8' />
                </div>
                <ArrowDownIcon className='w-8' />
            </span>
        </div>
    );
};