import { motion } from 'framer-motion'
import ArtworkCard, { ArtworkCardProps } from './artwork-card'

const IMAGES: ArtworkCardProps['data'][] = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1920px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg' },
]

const Artworks: React.FC = () => {
    return (
        <div className='w-full bg-[#FDDD96] pt-[80px] pb-[100px] flex flex-col mx-auto dark:text-[#0A0A0A] text-[#171B26]'>
            <div className='mx-auto'>
                <div className='text-center mx-auto w-fit'>
                    <h1 className='text-3xl font-bold font-rubik mb-[10px]'>Featured Artworks</h1>
                    <p className='text-2xl font-rubik w-[800px] mb-[40px]'>Take a look at our collection of featured pieces: artworks that will, without doubt, leave you amazed.</p>
                </div>

                <div className='grid justify-center gap-16 grid-cols-4 w-fit'>
                    {IMAGES.map((image, index) => {
                        return (
                            <motion.div key={index} className='group cursor-pointer transition duration-100'
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1, duration: 0.25 }}>
                                    <ArtworkCard data={image} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Artworks