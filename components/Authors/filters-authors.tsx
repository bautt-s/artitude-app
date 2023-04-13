import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { sortRequest } from '../../redux/slices/displayAuthors'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import { RootState } from '../../redux/store';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const FilterAuthors: React.FC = () => {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()
    const sortArguments = useSelector((state: RootState) => state.authorsDisplaySlice.sortArguments)

    // handlers for searchbar, the two dropdowns and the order buttons
    const handleSort = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(sortRequest({
            ...sortArguments,
            sort: e.currentTarget.value
        }))
    }

    const handleCountry = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(sortRequest({
            ...sortArguments,
            artistCountry: e.currentTarget.value
        }))
    }

    const handleOrder = (order: 'asc' | 'desc') => {
        dispatch(sortRequest({
            ...sortArguments,
            order
        }))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(sortRequest({
            ...sortArguments,
            search: searchInput
        }))
    }

    // query to get all the countries where authors are from, in
    // order to load the options to the second dropdown box
    interface Author {
        country: string
    }

    const countriesQuery = gql`
    query countriesQuery {
        getAllAuthors {
            country
        }
    }`

    const { data } = useQuery(countriesQuery)

    const countriesDisplayed: string[] = data ? Array.from(new Set(data?.getAllAuthors.map((author: Author) => author.country))) : ['Loading...']

    return (
        <div className='md:mr-[40px]'>
            <div className="mb-[20px] font-rubik">
                <span className="text-xl tracking-wide dark:text-white">Search by Name</span>
                <form onSubmit={handleSearch} className='border-2 rounded pr-[10px] mt-[5px] flex flex-row dark:bg-white'>
                    <input type="text" placeholder="Search.." value={searchInput} onChange={(e) => handleChange(e)}
                        className="w-[260px] py-[5px] pl-[10px] border-r-0 bg-white" />
                    <button type="submit" className='flex items-center justify-center ml-auto'>
                        <FiSearch className='text-xl ml-[7px]' />
                    </button>
                </form>
            </div>

            <div className="flex flex-col font-rubik mb-[20px]">
                <span className="text-xl tracking-wide dark:text-white">Sort By:</span>

                <div className='flex flex-row'>
                    <select onChange={(e: React.FormEvent<HTMLSelectElement>) => handleSort(e)} name="countries" id="countries"
                        className="md:w-[220px] w-full border-2 py-[5px] rounded mt-[5px] bg-white">
                        <option value="name">Name</option>
                        <option value="birthYear">Year</option>
                    </select>

                    <button className={`border-2 w-[35px] h-[35px] flex items-center justify-center mt-[5px] rounded ml-[5px] transition-colors
                    duration-100 ${sortArguments.order === 'asc' ? 'bg-[#FDDD96] hover:bg-[#eece8a]' : 'bg-white hover:bg-gray-100'}`}
                        onClick={() => handleOrder('asc')} >
                        <BsArrowUp className={sortArguments.order === 'asc' ? 'text-[#171B26]' : ''} />
                    </button>

                    <button className={`border-2 w-[35px] h-[35px] flex items-center justify-center mt-[5px] rounded ml-[5px] transition-colors
                    duration-100 ${sortArguments.order === 'desc' ? 'bg-[#FDDD96] hover:bg-[#eece8a]' : 'bg-white hover:bg-gray-100'}`}
                        onClick={() => handleOrder('desc')} >
                        <BsArrowDown className={sortArguments.order === 'desc' ? 'text-[#171B26]' : ''} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col font-rubik">
                <span className="text-xl tracking-wide dark:text-white">Artist From:</span>

                <select onChange={(e: React.FormEvent<HTMLSelectElement>) => handleCountry(e)} name="countries" id="countries"
                    className="md:w-[300px] w-full border-2 py-[5px] rounded mt-[5px] bg-white md:mb-0 mb-[40px]">
                    <option value=''>None</option>
                    {countriesDisplayed.map((country: string, index: number) => <option key={index} value={country}>{country}</option>)}
                </select>
            </div>
        </div>
    )
}

export default FilterAuthors