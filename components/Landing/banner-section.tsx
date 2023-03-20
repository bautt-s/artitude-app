import { invert } from '../../redux/slices/darkSlice'
import { useDispatch } from 'react-redux'

import { BsPaletteFill, BsSun, BsFillMoonFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Banner: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div>
            {/* header */}
            <header className="w-full h-[100px] dark:bg-[#0A0A0A] bg-[#171B26] text-white flex items-center border-b-[#FDDD96] border-b-2 px-[180px] transition-colors duration-300">
                <div className='flex flex-row items-center'>
                    <BsPaletteFill className='text-3xl mt-[5px]' />
                    <span className="text-4xl ml-[15px] font-oswald font-semibold">artitude</span>
                </div>

                <button className='flex flex-row ml-auto dark:bg-[#171B26] bg-[#586577] rounded-2xl' onClick={() => dispatch(invert())}>
                    <div className="dark:bg-[#FDDD96] bg-[#586577] py-[6px] px-[10px] rounded-2xl flex items-center">
                        <BsFillMoonFill className="text-lg dark:text-[#171B26] text-[#b9b9b9]" />
                    </div>

                    <div className="dark:bg-[#171B26] bg-[#FDDD96] py-[5px] px-[10px] rounded-2xl">
                        <BsSun className="text-xl dark:text-[#b9b9b9] text-[#171B26]" />
                    </div>
                </button>
            </header>

            {/* presentation */}
            <div className='dark:bg-[#171B26] bg-[#95A4B9] pt-[80px] transition-colors duration-300'>
                <div className='w-[870px] text-center flex mx-auto flex-col text-white'>
                    <motion.h1
                        className='text-7xl font-bold font-rubik tracking-tight'
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}>
                        Browse through the most beautiful artpieces.
                    </motion.h1>

                    <motion.p
                        className='text-xl mt-[25px] font-rubik'
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.25, duration: 0.35 }}>
                        Are you an artist looking for inspiration? Maybe just an art aficionado?
                        <br />Doesn't matter: in Artitude you will find whatever artpiece you are looking for.
                    </motion.p>

                    <motion.button
                        className="bg-[#FDDD96] dark:text-[#171B26] text-[#293041] w-[150px] font-semibold font-rubik py-[10px]  
                        mx-auto mt-[25px] text-xl rounded-lg hover:bg-[#ddbf7f] active:bg-[#bea369]"
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}>
                        Art up!
                    </motion.button>
                </div>

                <div className='flex flex-row justify-center gap-3 mt-[80px]'>
                    <img className='w-[500px] h-auto hover:scale-105 transition-all duration-300 drop-shadow-2xl'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg' />

                    <img className="w-[500px] h-auto hover:scale-105 transition-all duration-300 drop-shadow-2xl"
                        src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg' />

                    <img className='w-[500px] h-auto hover:scale-105 transition-all duration-300 drop-shadow-2xl'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Banner