import CardLayout from './card-layout';
import ToggleDark from '../Landing/toggle-dark'
import { BsPaletteFill } from 'react-icons/bs'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { PropType } from '@/pages/browse';
import Filters from './Filters';
import Footer from 'components/Landing/footer-section';

const Browse = (props: PropType) => {
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <header className="w-full h-[80px] dark:bg-[#0A0A0A] bg-[#171B26] text-white items-center border-b-[#FDDD96] border-b-2
            transition-colors duration-300 grid grid-cols-3 gap-[20%] px-[180px]">
                <Link href='/' className='flex flex-row items-center'>
                    <BsPaletteFill className='text-3xl mt-[5px]' />
                    <span className="text-4xl ml-[15px] font-oswald font-semibold">artitude</span>
                </Link>

                <ul className='flex flex-row list-disc list-inside gap-3 font-rubik'>
                    <li className='hover:underline underline-offset-4 decoration-[#FDDD96] list-none'>artworks</li>
                    <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'>authors</li>
                    <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'>submit</li>
                </ul>

                <div className="ml-auto">
                    <ToggleDark />
                </div>
            </header>

            <div className='flex flex-col items-center pb-[80px] dark:bg-[#171B26] transition-colors duration-300'>
                <div className='w-fit'>
                    <h1 className='mr-auto font-oswald text-4xl mt-[40px] mb-[40px] dark:text-white'>Original Artpieces Gallery</h1>

                    <div className='flex flex-row'>
                        <Filters />
                        <CardLayout data={props.data} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Browse