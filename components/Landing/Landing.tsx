import Banner from './banner-section'
import Features from './features-section'
import Artworks from './artworks-section'
import Submit from './submit-section'
import Footer from './footer-section'

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Landing: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <Banner />
            <Features />

            <div className='pt-[80px] pb-[140px] bg-gradient-to-b dark:from-[#0A0A0A] dark:to-[#171B26] from-white via-[#95A4B9] to-[#95A4B9] transition-colors duration-300'>
                <Artworks />
                <Submit />
            </div>

            <Footer />
        </div>
    )
}

export default Landing