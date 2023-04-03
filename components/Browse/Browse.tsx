import CardLayout from './card-layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Filters from './filters';
import Footer from 'components/Landing/footer-section';
import Navbar from './navbar';

const Browse = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="dark:bg-[#171B26] flex flex-col min-h-screen">
                <Navbar />

                <div className='flex flex-col items-center pb-[80px]  transition-colors duration-300'>
                    <div className='w-fit'>
                        <h1 className='mr-auto font-oswald lg:text-4xl text-3xl md:text-left sm:text-center mt-[40px] mb-[40px] dark:text-white px-[20px]'>Original Artpieces Gallery</h1>

                        <div className='flex md:flex-row flex-col px-[20px]'>
                            <Filters />
                            <CardLayout />
                        </div>
                    </div>
                </div>

                <div className='flex h-full justify-end items-end mt-auto'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Browse