import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import { invert } from '../../redux/slices/darkSlice'
import { useDispatch } from 'react-redux'

const ToggleDark: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <button className='flex flex-row dark:bg-[#171B26] bg-[#586577] rounded-2xl' onClick={() => dispatch(invert())}>
            <div className="dark:bg-[#FDDD96] bg-[#586577] py-[6px] px-[10px] rounded-2xl flex items-center">
                <BsFillMoonFill className="text-lg dark:text-[#171B26] text-[#b9b9b9]" />
            </div>

            <div className="dark:bg-[#171B26] bg-[#FDDD96] py-[5px] px-[10px] rounded-2xl">
                <BsSun className="text-xl dark:text-[#b9b9b9] text-[#171B26]" />
            </div>
        </button>
    )
}

export default ToggleDark