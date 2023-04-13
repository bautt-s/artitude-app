import { motion } from 'framer-motion'
import ArtworkCard, { ArtworkCardProps } from './artwork-card'

const IMAGES: ArtworkCardProps['data'][] = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jean-Honor%C3%A9_Fragonard_-_Blind-Man%E2%80%99s_Buff_-_Google_Art_Project.jpg/466px-Jean-Honor%C3%A9_Fragonard_-_Blind-Man%E2%80%99s_Buff_-_Google_Art_Project.jpg', link: '/browse/art/6437ad059358fe236fabe5d4' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/446px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg', link: '/browse/art/642d026876ceb14ae17ec0b1' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Fragonard_coresus_sacrificing_himselt_to_save_callirhoe.jpg/789px-Fragonard_coresus_sacrificing_himselt_to_save_callirhoe.jpg', link: '/browse/art/6437aca29358fe236fabe5d3' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/1920px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg', link: '/browse/art/641bb320efa48d83bd42a8ba' },
]

const Artworks: React.FC = () => {
    return (
        <div className='w-full dark:bg-[#FDDD96] bg-[#95A4B9] pt-[80px] pb-[100px] flex flex-col mx-auto dark:text-[#0A0A0A] text-white'>
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