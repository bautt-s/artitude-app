import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import AuthorCard from './authors-card';

export interface Author {
    __typename: string,
    id: string,
    name: string,
    image: string,
    country: string,
    birthYear: number
}

const AuthorsLayout: React.FC = () => {
    const sortArguments = useSelector((state: RootState) => state.authorsDisplaySlice.sortArguments)

    const authorsQuery = gql`
    query authorsQuery($sortArguments: DataSort){
        getAuthorsSorted(data: $sortArguments) {
            id
            name
            image
            country
            birthYear
        }
    }`

    const { data, loading, error } = useQuery(authorsQuery, {
        variables: { sortArguments }
    })

    if (error) return <div>There was an error.</div>

    // used to map loading skeleton
    const loadingPlaceholder = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    if (loading) return (
        <div className='w-fit grid grid-cols-3 gap-8'>
            {loadingPlaceholder.map((p, index) => {
                return (<div className="animate-pulse flex flex-col" key={index} >
                    <div className="w-[250px] h-[250px] flex items-center justify-center bg-gray-300 dark:bg-gray-700 mb-4">
                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>

                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-62 mb-4"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                </div>)
            })}
        </div>
    )

    return (
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-8 w-fit'>
            {data.getAuthorsSorted.map((au: Author, index: number) => {
                return (
                    <AuthorCard key={index} id={au.id} name={au.name} image={au.image} country={au.country} year={au.birthYear} />
                )
            })}
        </div>
    )
}

export default AuthorsLayout