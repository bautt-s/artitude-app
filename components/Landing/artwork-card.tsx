import Link from "next/link";

type ArtworkCardData = {
    img: string
    link: string
}

export type ArtworkCardProps = {
    data: ArtworkCardData;
}

const ArtworkCard: React.FC<ArtworkCardProps> = (props) => {
    const { img, link } = props.data

    return (
        <Link href={link}>
            <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg drop-shadow-xl transition-colors duration-300' >
                <img src={img}
                    className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

                <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to Artwork</span>
            </div>
        </Link>
    )
}

export default ArtworkCard