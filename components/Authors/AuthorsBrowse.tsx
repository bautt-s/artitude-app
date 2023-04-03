import Navbar from "components/Browse/navbar"
import Footer from "components/Landing/footer-section"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"
import AuthorsLayout from "./authors-layout"
import FilterAuthors from "./filters-authors"

const AuthorsBrowse: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="dark:bg-[#171B26] flex flex-col min-h-screen">
                <Navbar />

                <div className='flex flex-col items-center pb-[80px]  transition-colors duration-300'>
                    <div className='w-fit'>
                        <h1 className='mr-auto font-oswald lg:text-4xl text-3xl md:text-left sm:text-center mt-[40px] mb-[40px] dark:text-white px-[20px]'>Original Authors List</h1>

                        <div className='flex md:flex-row flex-col px-[20px]'>
                            <FilterAuthors />
                            <AuthorsLayout />
                        </div>
                    </div>
                </div>

                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AuthorsBrowse