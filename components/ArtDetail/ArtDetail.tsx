import { ApolloError } from "@apollo/client"
import Navbar from "components/Browse/navbar"
import Footer from "components/Landing/footer-section"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"
import Link from "next/link"

// type of props passed to component
type PropsDetail = {
    data: {
        getArtpieceById: {
            name: string,
            image: string,
            type: string,
            year: number,
            dimensions: string,
            description: string,
            author: {
                id: string
                name: string
            }
        }
    },
    error: ApolloError | undefined,
    loading: boolean
}

const ArtDetail: React.FC<PropsDetail> = (props) => {
    const { data, error, loading } = props
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="w-full lg:h-screen flex flex-col dark:bg-[#171B26] bg-[#d0dff1] transition-colors duration-300">
                <Navbar />

                {!error ?
                    <div className="flex flex-col lg:flex-row mx-auto mt-[60px] pb-[90px] px-[40px]">
                        {loading ?
                            <div className="h-[400px] w-[400px] xl:h-[600px] xl:w-[600px] rounded animate-pulse bg-gray-400 dark:bg-gray-700 flex items-center justify-center">
                                <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                            </div>
                            :
                            <a href={data.getArtpieceById.image} target="_blank" className="flex">
                                <img src={data.getArtpieceById.image} alt={data.getArtpieceById.name}
                                    className="h-[400px] w-[400px] xl:w-[600px] xl:h-[600px] object-cover rounded" />
                            </a>
                        }

                        {loading ?
                            <div className='mt-[40px] lg:mt-0 lg:ml-[60px] animate-pulse w-fit'>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-[400px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-[250px] mb-10"></div>

                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                                <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 lg:w-[450px] xl:w-[550px] mb-4"></div>
                            </div>
                            :
                            <div className="md:ml-[30px] lg:ml-[60px] font-rubik dark:text-white ">
                                <h1 className="font-oswald text-4xl mt-[20px] lg:mt-0">{`${data.getArtpieceById.name} - ${data.getArtpieceById.year}`}</h1>
                                <h3 className="mt-[5px] text-lg dark:text-[#FDDD96]">{`${data.getArtpieceById.type} - ${data.getArtpieceById.dimensions}`}</h3>
                                <h3>by <strong className="underline underline-offset-2 dark:decoration-[#FDDD96] decoration-[white] decoration-2">
                                    <Link href={`/browse/authors/${data.getArtpieceById.author.id}`}>{data.getArtpieceById.author.name}</Link>
                                </strong></h3>
                                <p className="mt-[40px] text-justify max-w-[900px]">{data.getArtpieceById.description}</p>
                            </div>
                        }
                    </div>
                    : <div className='dark:bg-[#171B26] bg-[#d0dff1] transition-colors duration-300 h-screen w-full dark:text-white font-rubik text-6xl flex justify-center items-center'>
                        There was an error.
                    </div>}

                <Footer />
            </div>
        </div>
    )
}

export default ArtDetail