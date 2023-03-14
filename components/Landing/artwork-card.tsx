type ArtworkCardData = {
    img: string
}

export type ArtworkCardProps = {
    data: ArtworkCardData;
}

const ArtworkCard: React.FC<ArtworkCardProps> = (props) => {
    const { img } = props.data

    return (
        <div className='w-[200px] h-[200px] bg-[#0A0A0A] rounded-lg'>
            <img src={img}
                className='object-cover rounded-lg shadow-xl w-[200px] h-[200px] group-hover:opacity-50 transition-all duration-300 absolute' />

            <span className="absolute mt-[80px] ml-[40px] text-white font-rubik text-xl opacity-0 group-hover:opacity-100 transition-all duration-300">Go to artwork</span>
        </div>
    )
}

export default ArtworkCard