import Link from "next/link"

type AuthorCardProps = {
    id: string,
    name: string,
    image: string,
    country: string,
    year: number
}

const AuthorCard: React.FC<AuthorCardProps> = (props) => {
    const { id, name, image, country, year } = props

    return (
        <Link className='font-rubik w-fit group' href={`/browse/authors/${id}`}>
            <img className='object-cover w-[250px] h-[250px] group-hover:opacity-70 dark:group-hover:opacity-50 transition-opacity duration-100
            border-double border-[6px] border-[#171B26] dark:border-[#FDDD96]' src={image} />

            <h2 className='font-bold text-lg mt-[10px] group-hover:text-[#ddbd79] dark:group-hover:text-[#b4985b] transition-color duration-100 dark:text-[#FDDD96]'>
                {name.length > 25 ? name.toUpperCase().slice(0,20)+'...' : name.toUpperCase()}
            </h2>
            
            <span className="group-hover:text-[#808080] dark:group-hover:text-[#a1a1a1] dark:text-white">{country} - {year}</span>
        </Link>
    )
}

export default AuthorCard