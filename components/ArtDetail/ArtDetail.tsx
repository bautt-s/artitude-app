import { gql, useQuery } from "@apollo/client"

type PropId = { id: string }

const ArtDetail: React.FC<PropId> = (props) => {
    const { id } = props

    const detailsQuery = gql`
    query getArtpieceById($id: String){
        getArtpieceById(id: $id) {
            name
        }
    }`

    const { data, loading, error } = useQuery(detailsQuery, { variables: { id } })
    
    if (error) return <div>There was an error.</div>
    if (loading) return <div>Loading details...</div>
    
    return (
        <div>
            <h1>{data.getArtpieceById.name}</h1>
        </div>
    )
}

export default ArtDetail