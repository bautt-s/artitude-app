import Head from 'next/head';
import { gql, useQuery } from "@apollo/client"
import ArtDetail from 'components/ArtDetail/ArtDetail';
import { useRouter } from 'next/router';

export default function ArtpiecePage() {
    const router = useRouter()
    const { id } = router.query

    const detailsQuery = gql`
    query getArtpieceById($id: String){
        getArtpieceById(id: $id) {
            name
            image
            type
            year
            dimensions
            description
            author {
                name
            }
        }
    }`
    
    const { data, loading, error } = useQuery(detailsQuery, { variables: { id } })

    return <>
        <Head>
            <title>{loading ? "artitude · loading..." : `artitude · ${data?.getArtpieceById.name.toLowerCase()}`}</title>
        </Head>

        <ArtDetail data={data} loading={loading} error={error} />
    </>
}