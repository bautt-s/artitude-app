import { useState, useRef, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import SubmitModal from './Modal';

const validateInput = (input: {
    authorId: string,
    name: string,
    image: string,
    year: string,
    buyable: boolean,
    type: string,
    dimensions: string,
    description: string,
    price: number
}) => {
    const err: {
        name: boolean,
        year: boolean,
        authorId: boolean
    } = {
        name: false,
        year: false,
        authorId: false
    }

    if (!input.name) err.name = true
    if (!input.year) err.year = true
    if (input.authorId === 'None') err.authorId = true

    return err
}

const SubmitArtpiece: React.FC = () => {
    const artistBox = useRef<HTMLSelectElement>(null)
    const typeBox = useRef<HTMLSelectElement>(null)

    const [showModal, setShowModal] = useState(false)
    const handleModal = () => setShowModal(true)

    const [fieldsValue, setFieldsValue] = useState({
        authorId: 'None',
        buyable: false,
        name: '',
        image: '',
        description: '',
        type: 'Painting',
        year: '',
        dimensions: '',
        price: 0
    })

    const [errors, setErrors] = useState(validateInput({ ...fieldsValue }))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        // regex used for limiting user input to only numeric on birth and death year fields.
        const re = /^[0-9\b]+$/;

        if (e.target.name === 'year') {
            if (e.target.value === '' || re.test(e.target.value)) {
                setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value })
            }
        } else setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value })

        setErrors(validateInput({ ...fieldsValue, [e.target.name]: e.target.value }))
    }

    const sendArtpiece = gql`
    mutation sendArtpiece($artpieceArguments: DataArtpiece) {
        createArtpiece(data: $artpieceArguments) {
            name
        }
    }`

    const [mutateArtpiece, { loading, error }] = useMutation(sendArtpiece)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!(errors.year || errors.name || errors.authorId)) {
            mutateArtpiece({
                variables: {
                    artpieceArguments: {
                        ...fieldsValue, year: parseInt(fieldsValue.year)
                    }
                }
            })

            setFieldsValue({
                authorId: '',
                buyable: false,
                name: '',
                image: '',
                description: '',
                type: 'Painting',
                year: '',
                dimensions: '',
                price: 0
            })
    
            if (artistBox.current) artistBox.current.selectedIndex = 0;
            if (typeBox.current) typeBox.current.selectedIndex = 0;

            setShowModal(true)
        }
    }

    useEffect(() => {
        setErrors(validateInput(fieldsValue))
    }, [loading])

    // used to get all IDs and names from authors 
    // to display in the correct select box
    const artistsIdQuery = gql`
    query artistsIdQuery {
        getAllAuthors {
            id
            name
        }
    }`

    const { data } = useQuery(artistsIdQuery)

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-fit">
            {showModal ? <SubmitModal setOpenModal={setShowModal} error={error} creation={"Artpiece"} /> : null}
            <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
                <div className="flex flex-col">
                    <span className="dark:text-white">Name <strong className={errors.name ? 'inline-block text-[#586577] dark:text-[#8695aa]' : 'hidden'}>- Required</strong></span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='name'
                        value={fieldsValue.name} onChange={(e) => handleChange(e)} />
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Image URL</span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='image'
                        value={fieldsValue.image} onChange={(e) => handleChange(e)} />
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Year <strong className={errors.year ? 'inline-block text-[#586577] dark:text-[#8695aa]' : 'hidden'}>- Required</strong></span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='year'
                        value={fieldsValue.year} onChange={(e) => handleChange(e)} />
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Dimensions</span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='dimensions'
                        value={fieldsValue.dimensions} onChange={(e) => handleChange(e)} />
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Artist <strong className={errors.authorId ? 'inline-block text-[#586577] dark:text-[#8695aa]' : 'hidden'}>- Required</strong></span>
                    <select className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='authorId' defaultValue='None'
                        value={fieldsValue.authorId} onChange={(e) => handleChange(e)} ref={artistBox}>
                        <option key={0} value="None" disabled>None</option>
                        {data?.getAllAuthors.map((au: { id: string, name: string }, index: number) => {
                            return <option key={index + 1} value={au.id}>{au.name}</option>
                        })}
                    </select>
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Type</span>
                    <select className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='type' defaultValue='Painting'
                        value={fieldsValue.type} onChange={(e) => handleChange(e)} ref={typeBox}>
                        <option value="Painting">Painting</option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Literature">Literature</option>
                        <option value="Architecture">Architecture</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col mt-[20px]">
                <span className="dark:text-white">Description</span>
                <textarea placeholder='Write a description...' className="resize-none w-full h-[150px] p-2 border-2 rounded"
                    name='description' value={fieldsValue.description} onChange={(e) => handleChange(e)} />
            </div>

            <button className={`mt-[35px] px-[25px] py-[5px] rounded-md transition-color duration-300 text-lg w-full md:w-auto
            ${!(errors.year || errors.name || errors.authorId) ? 'bg-[#FDDD96] hover:bg-[#ffd372] shadow-md' : 'bg-[#ccad6e] cursor-no-drop'}`}
                type='submit'>Submit</button>
        </form>
    )
}

export default SubmitArtpiece