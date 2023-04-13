import Link from 'next/link'
import { BsPaletteFill } from 'react-icons/bs'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const Footer: React.FC = () => {
    return (
        <footer className='dark:bg-[#0A0A0A] bg-[#171B26] w-full py-[60px] flex justify-center transition-colors duration-300 xl:px-[300px] lg:px-[200px] sm:px-[80px] px-[40px]'>
            <div className="flex flex-col">
                <div className='flex flex-row items-center text-white mb-[35px] group'>
                    <BsPaletteFill className='text-3xl mt-[5px]' />
                    <span className="text-4xl ml-[15px] font-oswald font-semibold group-hover:underline underline-offset-4 decoration-[#FDDD96]">artitude</span>
                </div>

                <div className='flex flex-row text-white text-3xl'>
                    <Link href='https://www.linkedin.com/in/baut-s/' target="_blank">
                        <SiLinkedin className='hover:text-[#FDDD96] transition-all duration-100' />
                    </Link>

                    <Link href='https://github.com/bautt-s' target="_blank">
                        <SiGithub className='ml-[20px] hover:text-[#FDDD96] transition-all duration-100' />
                    </Link>
                </div>
            </div>

            <div className='ml-auto'>
                <ul className='text-white font-rubik text-xl text-right'>
                    <li className='text-2xl font-bold mb-[10px]'>Pages</li>
                    <li className='mb-[5px] hover:underline underline-offset-4 decoration-[#FDDD96]'><Link href='/browse/art'>Artworks</Link></li>
                    <li className='mb-[5px] hover:underline underline-offset-4 decoration-[#FDDD96]'><Link href='/browse/authors'>Authors</Link></li>
                    <li className='hover:underline underline-offset-4 decoration-[#FDDD96]'><Link href='/submit'>Submit</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer