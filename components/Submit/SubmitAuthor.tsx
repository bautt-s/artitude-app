import CountrySelect from "./CountrySelect"
import { useEffect, useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const validateInput = (input: {
    name: string,
    image: string,
    birthYear: string,
    deathYear: string,
    country: string,
    description: string
}) => {
    const err: {
        name: boolean,
        birthYear: boolean,
        country: boolean
    } = {
        name: false,
        birthYear: false,
        country: false
    }

    if (!input.name) err.name = true
    if (input.birthYear) err.birthYear = true
    if (input.country === 'None') err.country = true

    return err
}

const SubmitAuthor: React.FC = () => {
    const countryBox = useRef<HTMLSelectElement>(null)

    const [fieldsValue, setFieldsValue] = useState({
        name: '',
        image: '',
        birthYear: '',
        deathYear: '',
        country: 'None',
        description: ''
    })

    const [errors, setErrors] = useState(validateInput({ ...fieldsValue }))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        // regex used for limiting user input to only numeric on birth and death year fields.
        const re = /^[0-9\b]+$/;

        if (e.target.name === 'birthYear' || e.target.name === 'deathYear') {
            if (e.target.value === '' || re.test(e.target.value)) {
                setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value })
            }
        } else setFieldsValue({ ...fieldsValue, [e.target.name]: e.target.value })

        setErrors(validateInput({ ...fieldsValue, [e.target.name]: e.target.value }))
    }

    const sendAuthor = gql`
    mutation sendAuthor($authorArguments: DataAuthor) {
        createAuthor(data: $authorArguments) {
            name
        }
    }`

    const [mutateAuthor, { loading, error }] = useMutation(sendAuthor)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!(errors.birthYear || errors.country || errors.name)) {
            mutateAuthor({
                variables: {
                    authorArguments: {
                        ...fieldsValue, birthYear: parseInt(fieldsValue.birthYear), deathYear: parseInt(fieldsValue.deathYear)
                    }
                }
            })

            setFieldsValue({
                name: '',
                image: '',
                birthYear: '',
                deathYear: '',
                country: 'None',
                description: ''
            })

            if (countryBox.current) countryBox.current.selectedIndex = 0;
        }
    }

    useEffect(() => {
        setErrors(validateInput(fieldsValue))
    }, [loading])

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-fit">
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
                    <span className="dark:text-white">Birth Year <strong className={errors.birthYear ? 'inline-block text-[#586577] dark:text-[#8695aa]' : 'hidden'}>- Required</strong></span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='birthYear'
                        value={fieldsValue.birthYear} onChange={(e) => handleChange(e)} />
                </div>

                <div className="flex flex-col">
                    <span className="dark:text-white">Death Year</span>
                    <input className="sm:w-[250px] border-2 rounded py-[2px] px-[5px]" name='deathYear'
                        value={fieldsValue.deathYear} onChange={(e) => handleChange(e)} />
                </div>
            </div>

            <CountrySelect value={fieldsValue} handler={handleChange} errCountry={errors.country} ref={countryBox} />

            <div className="flex flex-col mt-[20px]">
                <span className="dark:text-white">Description</span>
                <textarea placeholder='Write a description...' className="resize-none w-full h-[150px] p-2 border-2 rounded"
                    name='description' value={fieldsValue.description} onChange={(e) => handleChange(e)} />
            </div>

            <button className={`mt-[35px] px-[25px] py-[5px] rounded-md transition-color duration-300 text-lg w-full md:w-auto
            ${!(errors.birthYear || errors.country || errors.name) ? 'bg-[#FDDD96] hover:bg-[#ffd372] shadow-md' : 'bg-[#ccad6e] cursor-no-drop'}`}
                type='submit'>Submit</button>
        </form>
    )
}

export default SubmitAuthor