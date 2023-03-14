import Banner from './banner-section'
import Features from './features-section'
import Artworks from './artworks-section'
import Submit from './submit-section'
import Footer from './footer-section'

const Landing: React.FC = () => {
    return (
        <div className='antialiased'>
            <Banner />
            <Features />

            <div className='pt-[120px] pb-[140px] bg-gradient-to-b from-[#0A0A0A] to-[#171B26]'>
                <Artworks />
                <Submit />
            </div>

            <Footer />
        </div>
    )
}

export default Landing