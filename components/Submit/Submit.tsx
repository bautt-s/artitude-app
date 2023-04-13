import Navbar from "components/Browse/navbar"
import Footer from "components/Landing/footer-section"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"
import SubmitAuthor from "./SubmitAuthor"
import SubmitArtpiece from "./SubmitArtpiece"
import { BsPersonFill } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { useState } from 'react';

const SubmitMain: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)
    const [authorSelected, setAuthorSelected] = useState(true)

    const handleSection = () => setAuthorSelected(!authorSelected)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="h-screen dark:bg-[#171B26] transition-colors duration-100">
                <Navbar />

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch xl:items-center justify-center my-[40px] mx-auto w-fit lg:mx-0 lg:w-auto">
                    <img className="w-[520px] h-[200px] lg:w-[400px] xl:w-[600px] lg:h-auto object-cover drop-shadow-2xl lg:hover:translate-x-[-20px] transition-all duration-300"
                        src='https://www.washingtonpost.com/wp-apps/imrs.php?w=1200&src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJBKNIKEKZDVXI7X3ARH5E7S6Y.jpg' />

                    <div className="mt-[20px] lg:mt-0 md:ml-0 lg:ml-[40px] xl:ml-[80px] font-rubik mx-5 sm:mx-0">
                        <div className="flex flex-row items-center">
                            <h1 className="font-oswald text-3xl dark:text-white">Submit {authorSelected ? 'Author' : 'Artpiece'}</h1>
                            <button className="mt-[2px] ml-auto bg-[#586577] dark:bg-[#FDDD96] p-2 rounded-full text-white dark:text-[#171B26]" onClick={handleSection}>
                                {authorSelected ? <BsPersonFill className="text-2xl" /> : <FaPaintBrush className="text-2xl" />}
                            </button>
                        </div>

                        {authorSelected ? <SubmitAuthor /> : <SubmitArtpiece />}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default SubmitMain