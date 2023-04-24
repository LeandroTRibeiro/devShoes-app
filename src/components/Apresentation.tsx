import { useEffect, useState } from 'react';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';

export const Apresentation = (props: {closeApresentation: boolean, HandlerCloseApresentation: () => void}) => {

    const [startGlitchEffect, setStartGlitchEffect] = useState(false);
    const [finishApresentation, setFinishApresentation] = useState(false);
    
    const [hiddenApresentation, setHiddenApresentation] = useState(false);

    const glitchEffectTimer = 3000;
    const finishEffectTimer = 2500;
    const closeApresentation = 500;

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartGlitchEffect(true);
            setTimeout(() => {
               setFinishApresentation(true);
               setTimeout(() => {
                    props.HandlerCloseApresentation();
                    setTimeout(() => {
                        setHiddenApresentation(true);
                    }, 500)
               }, closeApresentation);
            }, finishEffectTimer)
        }, glitchEffectTimer);

        return () => clearTimeout(timer);
    },[])

    return (

        <div 
            className={`absolute w-screen h-screen bg-stone-100 z-50 flex justify-center items-center p-2 transition-all ease-in-out duration-500 
                ${props.closeApresentation ? 'opacity-0' : ''}
                ${hiddenApresentation ? 'hidden' : ''}`
            }
        >
            <img 
                src={logo3} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !finishApresentation ? 'glitch3' : 'hidden'}`
                }
            />

            <img 
                src={logo2} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !finishApresentation ? 'glitch2' : 'hidden'}`
                }
            />

            <img 
                src={logo} 
                alt="logo" 
                className={`absolute w-36    
                    ${startGlitchEffect && !finishApresentation ? 'glitch1' : finishApresentation ? 'logo-return top-2' : 'logo'}`
                }
            />

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !finishApresentation ? 'glitch3' : 'hidden'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DIAMOND</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !finishApresentation ? 'glitch2' : 'hidden'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DIAMOND</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>

            <div 
                className={`absolute -z-10  ml-[350px] 
                    ${startGlitchEffect && !finishApresentation ? 'glitch1' : finishApresentation ? 'logo-name-reverse' : 'logo-name'}`
                }
            >
                <h1 className='font-montserrat font-semibold text-4xl'>DIAMOND</h1>
                <h2 className='font-montserrat font-thin'>SNEAKERS.</h2>
            </div>
        </div>
    );
};