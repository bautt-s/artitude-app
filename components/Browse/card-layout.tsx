import ArtpieceCard from './card-artwork';

export interface Artpiece {
    __typename: string,
    name: string,
    year: number,
    image: string,
    dimensions: string,
    author: {
        __typename: string,
        name: string
    }
}

interface PropType { data: any }

const CardLayout = (props: PropType) => {
    return (
        <div className='grid grid-cols-3 gap-8 w-fit'>
            {props.data?.getAllArtpieces.map((ap: Artpiece, index: number) => {
                return (
                    <ArtpieceCard key={index} name={ap.name} image={ap.image} year={ap.year} author={ap.author.name} dimensions={ap.dimensions} />
                )
            })}
        </div>
    )
}

export default CardLayout