import Head from 'next/head';
import { gql, useQuery } from "@apollo/client"
import { useRouter } from 'next/router';
import AuthorDetail from 'components/AuthorDetail/AuthorDetail';

export default function AuthorPage() {
    const router = useRouter()
    const { id } = router.query

    const detailsQuery = gql`
    query getAuthorById($id: String){
        getAuthorById(id: $id) {
            birthYear
            country
            deathYear
            description
            image
            name
            pieces {
                name
                image
            }
        }
    }`

    const { data, loading, error } = useQuery(detailsQuery, { variables: { id } })

    return <>
        <Head>
            <title>{loading ? "artitude · loading..." : `artitude · ${data?.getAuthorById.name.toLowerCase()}`}</title>
        </Head>

        <AuthorDetail data={data} loading={loading} error={error} />
    </>
}