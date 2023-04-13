import { motion } from 'framer-motion'
import Link from 'next/link'

const Submit: React.FC = () => {
    return (
        <div className='flex pt-[120px]'>
            <div className='flex flex-row mx-auto'>
                <motion.div initial={{ opacity: 0, translateX: -20 }}
                    whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
                    <img className='w-[300px] h-auto drop-shadow-xl'
                        src='https://cdn.home-designing.com/wp-content/uploads/2017/05/paris-in-art-deco-style-architecture-paintings-1-600x600.jpg' />
                </motion.div>

                <motion.div className='mt-[30px] ml-[40px]' initial={{ opacity: 0, translateX: 20 }}
                    whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.35, delay: 0.15 }}>
                    <h2 className='text-lg font-bold font-rubik dark:text-[#FDDD96] text-[#e9c67b]'>SUBMIT</h2>
                    <h1 className='font-rubik text-3xl dark:text-white font-bold mt-[10px] mb-[10px]'>Want to submit an Artpiece or Artist?</h1>
                    <p className='font-rubik text-2xl dark:text-white'>Maybe you feel like we are missing something or someone.<br /> In that case, we invite you to expand our database!</p>

                    <Link href='/submit'>
                        <button className='text-xl font-rubik text-[#171B26] font-bold mt-[40px] bg-[#f3d490] px-[20px] py-[10px] rounded-lg hover:bg-[#ddbf7f] active:bg-[#bea369] transition-all duration-300'>
                            Collaborate
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Submit