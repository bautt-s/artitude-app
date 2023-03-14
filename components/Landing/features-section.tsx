import { BsPersonFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { ImFilePicture } from 'react-icons/im'
import { GiReceiveMoney } from 'react-icons/gi'
import { motion } from 'framer-motion'

import FeatureCard, { FeatureCardProps } from './feature-card'

const FEATURES: FeatureCardProps['data'][] = [{
    title: 'Art Search',
    text: 'Finding exactly what inspires you the most, has never been so simple.',
    icon: <BiSearchAlt className='text-4xl text-[#0A0A0A]' />
},
{
    title: 'High Resolution',
    text: 'We provide you with high resolution links to your favourite images.',
    icon: <ImFilePicture className='text-3xl text-[#0A0A0A]' />
},
{
    title: 'Art on Sale',
    text: 'Looking to get yourself a masterpiece? Filter through buyable pieces.',
    icon: <GiReceiveMoney className='text-3xl text-[#0A0A0A]' />
},
{
    title: 'Author Details',
    text: 'Love a certain artist? Find what other pieces they may have for show.',
    icon: <BsPersonFill className='text-4xl text-[#0A0A0A]' />
}]

const Features: React.FC = () => {
    return (
        <div className="pt-[120px] pb-[60px] bg-[#0A0A0A] w-full" >
            <div className='flex flex-col'>
                <div className='mx-auto'>
                    <h2 className='text-lg font-bold font-rubik text-[#FDDD96]'>FEATURES</h2>
                    <h1 className='text-3xl font-bold font-rubik mt-[10px] mb-[10px] text-white'>Main Features</h1>

                    <div className='flex flex-col text-2xl font-rubik text-white'>
                        <span>Look into any type or style of artwork you are looking for. Filter them by any of their</span>
                        <span>attributes and find out if, by any chance, they are currently in sale at the moment.</span>
                    </div>

                    <div className='grid justify-center gap-4 grid-cols-4 mt-[60px]'>
                        {FEATURES.map((feature, index) => {
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.25 }}
                                >
                                    <FeatureCard data={feature} />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features