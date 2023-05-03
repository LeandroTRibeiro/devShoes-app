import { useNavigate } from "react-router-dom";

import wall from '../assets/gifs/wall.gif';
import github from '../assets/svgs/gitIconBlack.svg';

import { CommandLineIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const Warning = () => {

    const navigate = useNavigate();

    const HandlerNavigationBack = () => {
        if(window.innerWidth >= 768) navigate('/');
    };

    return (
        <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center text-stone-800 p-5">
            <ExclamationTriangleIcon className="text-cyan-500 w-10"/> 
            <h1 className="text-xl text-center">
                SORRY I AM STILL WORKING ON THAT RESPONSIVENESS
            </h1>
            <a className="w-[280px] flex items-center gap-3 bg-stone-300 p-2 rounded-md border-2 border-stone-300 transition-all ease-in-out duration-300 hover:bg-transparent active:scale-75" href="https://github.com/LeandroTRibeiro" target="_blank">
                <img src={github} alt="github logo" className="w-6"/>
                <p className="font-montserrat">acess my repositories</p>
            </a>
            <a className="w-[280px] flex items-center gap-3 bg-stone-300 p-2 rounded-md border-2 border-stone-300 transition-all ease-in-out duration-300 hover:bg-transparent active:scale-75" href="https://devleandro.netlify.app" target="_blank">
                <CommandLineIcon className="w-6"/>
                <p className="font-montserrat">acess my site</p>
            </a>
            <img src={wall} alt="wall gif" className="w-48"/>
            <span className="text-sm text-center">if you are on a big screen, resize your browser and click below!</span>
            <button className="w-[75vw] font-sans text-base transition-all ease-in-out duration-300 border-2 border-cyan-500 bg-cyan-500 text-stone-200 py-2 rounded-lg hover:bg-transparent hover:text-cyan-500 font-semibold active:scale-75" onClick={HandlerNavigationBack}>BACK</button>
        </div>
    );
};