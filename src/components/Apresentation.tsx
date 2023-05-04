import { useEffect, useState } from 'react';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';

export const Apresentation = (props: {HandlerCloseApresentation: () => void}) => {

    const [startGlitchEffect, setStartGlitchEffect] = useState(false);
    const [moveLogoEffect, setMoveLogoEffect] = useState(false);
    const [opacityPage, setOpacityPage] = useState(false);

    const glitchEffectTimer = 3000;
    const moveLogoEffectTimer = 2500;
    const opacityPageTimer = 500;
    const closeApresentationTimer = 250;

    useEffect(() => {

        const timer = setTimeout(() => {
            setStartGlitchEffect(true);
            setTimeout(() => {
               setMoveLogoEffect(true);
               setTimeout(() => {
                setOpacityPage(true);
                setTimeout(() => {
                    props.HandlerCloseApresentation();
                }, closeApresentationTimer)
               }, opacityPageTimer);
            }, moveLogoEffectTimer)
        }, glitchEffectTimer);

        return () => clearTimeout(timer);

    },[])

    return (

        <div
            className={`absolute w-screen h-screen bg-stone-100 z-50 flex justify-center items-center p-2 transition-all ease-in-out duration-500 
                ${opacityPage ? 'opacity-0' : ''}`
            }
        >
            <img 
                src={logo3} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch3' : 'hidden'}`
                }
            />

            <img 
                src={logo2} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch2' : 'hidden'}`
                }
            />

            <img 
                src={logo} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch1' : moveLogoEffect ? 'logo-return top-2' : 'logo'}`
                }
            />

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch3' : 'hidden'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DEVSHOES</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch2' : 'hidden'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DEVSHOES</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !moveLogoEffect ? 'glitch1' : moveLogoEffect ? 'logo-name-reverse' : 'logo-name'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DEVSHOES</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>
        </div>
    );
};