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
    if (loading) return <div>Is loading...</div>

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