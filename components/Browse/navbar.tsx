import ToggleDark from "components/Landing/toggle-dark"
import { BsPaletteFill } from "react-icons/bs"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="w-full py-[20px] dark:bg-[#0A0A0A] bg-[#171B26] text-white border-b-[#FDDD96] border-b-2
            transition-colors duration-300 flex flex-row flex-nowrap justify-between xl:px-[100px] px-[20px] items-center">
            <Link href='/' className='flex flex-row items-center w-fit'>
                <BsPaletteFill className='text-3xl mt-[5px]' />
                <span className="lg:text-4xl text-3xl ml-[15px] font-oswald font-semibold">artitude</span>
            </Link>

            <ul className='flex-row list-disc list-inside gap-3 font-rubik w-fit md:text-lg sm:text-md text-sm sm:flex hidden'>
                <li className='hover:underline underline-offset-4 decoration-[#FDDD96] list-none'>
                    <Link href='/browse/art'>artworks</Link>
                </li>
                <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'>
                    <Link href='/browse/authors'>authors</Link>
                </li>
                <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'>
                <Link href='/submit'>submit</Link>
                </li>
            </ul>

            <div className="w-fit">
                <ToggleDark />
            </div>
        </header>
    )
}

export default Navbar