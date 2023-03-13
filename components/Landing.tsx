import { BsPaletteFill, BsPersonFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { ImFilePicture } from 'react-icons/im'
import { GiReceiveMoney } from 'react-icons/gi'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Landing: React.FC = () => {
    return (
        <div className='antialiased'>
            {/* header */}
            <header className="w-full h-[100px] bg-[#0A0A0A] text-white flex items-center border-b-[#FDDD96] border-b-2">
                <div className='flex flex-row items-center ml-[190px]'>
                    <BsPaletteFill className='text-3xl mt-[5px]' />
                    <span className="text-4xl ml-[15px] font-oswald font-semibold">artitude</span>
                </div>
            </header>

            {/* presentation */}
            <div className='bg-[#171B26] pt-[80px]'>
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
                        className="bg-[#FDDD96] text-[#171B26] w-[150px] font-semibold font-rubik py-[10px]  
                        mx-auto mt-[25px] text-xl rounded-lg hover:bg-[#ddbf7f] active:bg-[#bea369]"
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}>
                        Art up!
                    </motion.button>
                </div>

                <div className='flex flex-row justify-center gap-3 mt-[80px]'>
                    <img className='w-[500px] h-auto hover:scale-105 transition-all duration-300'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg' />

                    <img className="w-[500px] h-auto hover:scale-105 transition-all duration-300"
                        src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg' />

                    <img className='w-[500px] h-auto hover:scale-105 transition-all duration-300'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg' />
                </div>
            </div>

            {/* features */}
            <div className="pt-[120px] pb-[60px] bg-[#0A0A0A] w-full">
                <div className='flex flex-col'>
                    <div className='mx-auto'>
                        <h2 className='text-lg font-bold font-rubik text-[#FDDD96]'>FEATURES</h2>
                        <h1 className='text-3xl font-bold font-rubik mt-[10px] mb-[10px] text-white'>Main Features</h1>

                        <div className='flex flex-col text-2xl font-rubik text-white'>
                            <span>Look into any type or style of artwork you are looking for. Filter them by any of their</span>
                            <span>attributes and find out if, by any chance, they are currently in sale at the moment.</span>
                        </div>

                        <div className='grid justify-center gap-4 grid-cols-4 mt-[60px]'>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 * 0.1, duration: 0.25 }}
                                className='flex flex-col w-[250px] p-4 border-[2px] border-[#303030] rounded-md hover:border-[#FDDD96] group cursor-pointer transition duration-100'>
                                <div className='flex justify-center items-center bg-[#FDDD96] rounded-2xl h-[70px] w-[70px] mb-[20px] group-hover:scale-105 transition-transform'>
                                    <BiSearchAlt className='text-4xl text-[#0A0A0A]' />
                                </div>

                                <h4 className='mb-2 text-2xl font-bold font-rubik text-white'>Art Search</h4>
                                <p className='font-rubik text-lg text-white'>Finding exactly what inspires you the most, has never been so simple.</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 * 0.1, duration: 0.25 }}
                                className='flex flex-col w-[250px] p-4 border-[2px] border-[#303030] rounded-md hover:border-[#FDDD96] group cursor-pointer transition duration-100'>
                                <div className='flex justify-center items-center bg-[#FDDD96] rounded-2xl h-[70px] w-[70px] mb-[20px] group-hover:scale-105 transition-transform'>
                                    <ImFilePicture className='text-3xl text-[#0A0A0A]' />
                                </div>

                                <h4 className='mb-2 text-2xl font-bold font-rubik text-white'>High Resolution</h4>
                                <p className='font-rubik text-lg text-white'>We provide you with high resolution links to your favourite images.</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3 * 0.1, duration: 0.25 }}
                                className='flex flex-col w-[250px] p-4 border-[2px] border-[#303030] rounded-md hover:border-[#FDDD96] group cursor-pointer transition duration-100'>
                                <div className='flex justify-center items-center bg-[#FDDD96] rounded-2xl h-[70px] w-[70px] mb-[20px] group-hover:scale-105 transition-transform'>
                                    <GiReceiveMoney className='text-3xl text-[#0A0A0A]' />
                                </div>

                                <h4 className='mb-2 text-2xl font-bold font-rubik text-white'>Art on Sale</h4>
                                <p className='font-rubik text-lg text-white'>Looking to get yourself a masterpiece? Filter through buyable pieces.</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4 * 0.1, duration: 0.25 }}
                                className='flex flex-col w-[250px] p-4 border-[2px] border-[#303030] rounded-md hover:border-[#FDDD96] group cursor-pointer transition duration-100'>
                                <div className='flex justify-center items-center bg-[#FDDD96] rounded-2xl h-[70px] w-[70px] mb-[20px] group-hover:scale-105 transition-transform'>
                                    <BsPersonFill className='text-4xl text-[#0A0A0A]' />
                                </div>

                                <h4 className='mb-2 text-2xl font-bold font-rubik text-white'>Author Details</h4>
                                <p className='font-rubik text-lg text-white'>Love a certain artist? Find what other pieces they may have for show.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom part */}
            <div className='pt-[120px] pb-[140px] bg-gradient-to-b from-[#0A0A0A] to-[#171B26]'>
                {/* featured artworks */}
                <div className='w-full bg-[#FDDD96] pt-[80px] pb-[100px] flex flex-col mx-auto text-[#0A0A0A]'>
                    <div className='mx-auto'>
                        <div className='text-center mx-auto w-fit'>
                            <h1 className='text-3xl font-bold font-rubik mb-[10px]'>Featured Artworks</h1>
                            <p className='text-2xl font-rubik w-[800px] mb-[40px]'>Take a look at our collection of featured pieces: artworks that will, without doubt, leave you amazed.</p>
                        </div>

                        <div className='grid justify-center gap-16 grid-cols-4 w-fit'>
                            <motion.div className='group cursor-pointer transition duration-100'
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 * 0.1, duration: 0.25 }}>

                                <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg'
                                        className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

                                    <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to artwork</span>
                                </div>
                            </motion.div>

                            <motion.div className='group cursor-pointer transition duration-100'
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 * 0.1, duration: 0.25 }}>
                                <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg'
                                        className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

                                    <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to artwork</span>
                                </div>
                            </motion.div>

                            <motion.div className='group cursor-pointer transition duration-100'
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3 * 0.1, duration: 0.25 }}>
                                <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg'
                                        className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

                                    <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to artwork</span>
                                </div>
                            </motion.div>

                            <motion.div className='group cursor-pointer transition duration-100'
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4 * 0.1, duration: 0.25 }}>
                                <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1920px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg'
                                        className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

                                    <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to artwork</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* submit artwork/artist */}
                <div className='flex pt-[120px]'>
                    <div className='flex flex-row mx-auto'>
                        <motion.div initial={{ opacity: 0, translateX: -20 }}
                            whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
                            <img className='w-[300px] h-auto'
                                src='https://cdn.home-designing.com/wp-content/uploads/2017/05/paris-in-art-deco-style-architecture-paintings-1-600x600.jpg' />
                        </motion.div>

                        <motion.div className='mt-[30px] ml-[40px]' initial={{ opacity: 0, translateX: 20 }}
                            whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
                            <h2 className='text-lg font-bold font-rubik text-[#FDDD96]'>SUBMIT</h2>
                            <h1 className='font-rubik text-3xl text-white font-bold mt-[10px] mb-[10px]'>Want to submit an Artpiece or Artist?</h1>
                            <p className='font-rubik text-2xl text-white'>Maybe you feel like we are missing something or someone.<br /> In that case, we invite you to complete our database!</p>

                            <button className='text-xl font-rubik text-[#171B26] font-bold mt-[40px] bg-[#FDDD96] px-[20px] py-[10px] rounded-lg hover:bg-[#ddbf7f] active:bg-[#bea369] transition-all duration-300'>
                                Collaborate
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <footer className='bg-[#0A0A0A] w-full py-[60px] flex justify-center'>
                <div className='grid grid-cols-2 gap-[600px]'>
                    <div className="flex flex-col">
                        <div className='flex flex-row items-center text-white mb-[35px] group'>
                            <BsPaletteFill className='text-3xl mt-[5px] ' />
                            <span className="text-4xl ml-[15px] font-oswald font-semibold group-hover:underline underline-offset-4 decoration-[#FDDD96]">artitude</span>
                        </div>

                        <div className='flex flex-row text-white text-3xl'>
                            <Link href='https://www.linkedin.com/in/baut-s/' target="_blank">
                                <SiLinkedin className='hover:text-[#FDDD96] transition-all duration-100' />
                            </Link>
                            
                            <Link href='https://github.com/bautt-s' target="_blank">
                                <SiGithub className='ml-[20px] hover:text-[#FDDD96] transition-all duration-100'/>
                            </Link>
                        </div>
                    </div>

                    <div className='ml-auto'>
                        <ul className='text-white font-rubik text-xl text-right'>
                            <li className='text-2xl font-bold mb-[10px]'>Pages</li>
                            <li className='mb-[5px] hover:underline underline-offset-4 decoration-[#FDDD96]'>Artworks</li>
                            <li className='mb-[5px] hover:underline underline-offset-4 decoration-[#FDDD96]'>Authors</li>
                            <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'>Submit</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing