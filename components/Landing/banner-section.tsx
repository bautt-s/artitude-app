import ToggleDark from './toggle-dark'
import { BsPaletteFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Banner: React.FC = () => {
    return (
        <div>
            {/* header */}
            <header className="w-full h-[100px] dark:bg-[#0A0A0A] bg-[#171B26] text-white flex items-center border-b-[#FDDD96] border-b-2 px-[180px] transition-colors duration-300">
                <div className='flex flex-row items-center'>
                    <BsPaletteFill className='text-3xl mt-[5px]' />
                    <span className="text-4xl ml-[15px] font-oswald font-semibold">artitude</span>
                </div>

                <div className="ml-auto">
                    <ToggleDark />
                </div>
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
                        mx-auto mt-[25px] text-xl rounded-lg hover:bg-[#eecd87] active:bg-[#ceb172] transition-colors duration-300"
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}>
                        <Link href='/browse/art'>
                            Art up!
                        </Link>
                    </motion.button>
                </div>

                <div className='flex flex-row justify-center gap-3 mt-[80px]'>
                    <Link href='/browse/art/641baddaefa48d83bd42a89b'>
                        <img className='w-[500px] h-[640px] hover:scale-105 transition-all duration-300 drop-shadow-2xl object-cover' alt='Artwork'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg' />
                    </Link>

                    <Link href='/browse/art/641bae6aefa48d83bd42a8a2'>
                        <img className="w-[500px] h-[640px] hover:scale-105 transition-all duration-300 drop-shadow-2xl object-cover" alt='Artwork'
                            src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg' />
                    </Link>

                    <Link href='/browse/art/641bad33efa48d83bd42a896'>
                        <img className='w-[500px] h-[640px] hover:scale-105 transition-all duration-300 drop-shadow-2xl object-cover' alt='Artwork'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner