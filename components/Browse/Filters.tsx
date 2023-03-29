import { FiSearch } from 'react-icons/fi'

const handleSort = () => {
    return null
}

const Filters: React.FC = () => {
    return (
        <div className='mr-[40px]'>
            <div className="mb-[20px] font-rubik">
                <span className="text-xl tracking-wide dark:text-white">Search by Name</span>
                <form className='border-2 border-l-neutral-400 rounded pr-[10px] mt-[5px] flex flex-row dark:bg-white'>
                    <input type="text" placeholder="Search.." name="search" className="w-[260px] py-[5px] pl-[10px] border-r-0" />
                    <button type="submit" className='flex items-center justify-center'>
                        <FiSearch className='text-xl ml-[7px]'/>
                    </button>
                </form>
            </div> 

            <div className="flex flex-col font-rubik mb-[20px]">
                <span className="text-xl tracking-wide dark:text-white">Sort By:</span>

                <select onChange={handleSort} name="countries" id="countries" className="w-[300px] border-2 border-l-neutral-400 py-[5px] rounded mt-[5px]">
                    <option value="volvo">Name</option>
                    <option value="saab">Artist</option>
                    <option value="mercedes">Year</option>
                </select>
            </div>

            <div className="flex flex-col font-rubik">
                <span className="text-xl tracking-wide dark:text-white">Artist From:</span>

                <select name="countries" id="countries" className="w-[300px] border-2 border-l-neutral-400 py-[5px] rounded mt-[5px]">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    )
}

export default Filters