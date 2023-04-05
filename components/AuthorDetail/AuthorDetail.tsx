import { ApolloError } from "@apollo/client"
import Navbar from "components/Browse/navbar"
import Footer from "components/Landing/footer-section"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

// type of props passed to component
type PropsDetail = {
    data: {
        getAuthorById: {
            name: string,
            image: string,
            country: string,
            birthYear: number,
            deathYear: number,
            description: string,
            pieces: {
                name: string,
                image: string,
                dimensions: string
            }[]
        }
    },
    error: ApolloError | undefined,
    loading: boolean
}

const AuthorDetail: React.FC<PropsDetail> = (props) => {
    const { data, loading, error } = props
    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <div className="w-full flex flex-col transition-colors duration-300 dark:bg-[#586577] bg-[#d0dff1]">
                <Navbar />

                {!error ?
                    <div className="mx-auto">
                        <div className="flex flex-col lg:flex-row pt-[60px] pb-[90px] px-[40px]">
                            {loading ?
                                <div className="h-[400px] w-[400px] xl:h-[600px] xl:w-[600px] rounded animate-pulse bg-gray-400 dark:bg-gray-700 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                :
                                <a href={data.getAuthorById.image} target="_blank" className="flex">
                                    <img src={data.getAuthorById.image} alt={data.getAuthorById.name}
                                        className="h-[400px] w-[400px] xl:w-[600px] xl:h-[600px] object-cover rounded-lg md:ml-[30px] 
                                        lg:ml-0 drop-shadow-2xl md:hover:translate-x-[-20px] transition-all duration-300" />
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
                                    <h1 className="font-oswald text-4xl mt-[20px] lg:mt-0">{data.getAuthorById.name}</h1>
                                    <h3 className="mt-[5px] text-lg dark:text-[#FDDD96] text-[#be8c21] font-bold">{data.getAuthorById.country.toUpperCase()}</h3>
                                    <h3 className="underline underline-offset-2 dark:decoration-[#FDDD96] decoration-[#be8c21] decoration-2">
                                        {data.getAuthorById.deathYear ? `${data.getAuthorById.birthYear} - ${data.getAuthorById.deathYear}` : data.getAuthorById.birthYear}
                                    </h3>

                                    <p className="mt-[40px] text-justify max-w-[900px] text-lg">{data.getAuthorById.description}</p>
                                </div>
                            }
                        </div>


                    </div>
                    : <div className='dark:bg-[#171B26] bg-[#d0dff1] transition-colors duration-300 h-screen w-full dark:text-white font-rubik text-6xl flex justify-center items-center'>
                        There was an error.
                    </div>}

                <div className="bg-white dark:bg-[#171B26] overflow-hidden pt-[40px]">
                    <div className="mt-[25px] flex mx-auto flex-col pl-[40px] md:pl-[60px] lg:pl-[40px] xxl:px-[9%] w-screen">
                        <h2 className="font-oswald text-4xl mb-[30px] dark:text-white">Artpieces by this Artist</h2>
                        <Swiper
                            loop={false}
                            slidesPerView={1}
                            spaceBetween={0}
                            freeMode={true}
                            direction={"horizontal"}
                            modules={[FreeMode, Autoplay]}

                            breakpoints={{
                                1440: {
                                    width: 1440,
                                    slidesPerView: 4
                                },
                                1024: {
                                    width: 1024,
                                    slidesPerView: 3
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 1,
                                    direction: "horizontal"
                                }
                            }} className="w-full h-[460px]">


                            {data?.getAuthorById.pieces.map((p, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="w-[300px] h-fit pb-[20px] border-[2px] border-[#e6e6e6] dark:border-[#4d4c4b] drop-shadow-xl bg-white dark:bg-[#171B26]
                                        rounded-xl dark:hover:border-[#FDDD96] hover:border-[#FDDD96] transition-all duration-200 group overflow-hidden">
                                            <div className="w-full h-[250px] overflow-hidden">
                                                <img src={p.image} 
                                                className="w-full h-[250px] object-cover rounded-t-xl group-hover:rotate-2 group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                            
                                            <div className="ml-[15px] dark:text-white">
                                                <h2 className="font-oswald text-3xl mt-[20px] mb-[5px]">
                                                    {p.name.length > 20 ? p.name.slice(0,20)+'...' : p.name}    
                                                </h2>

                                                <span className="font-rubik text-xl">{p.dimensions}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AuthorDetail