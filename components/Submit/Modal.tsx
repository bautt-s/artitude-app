import { ApolloError } from "@apollo/client"

type ModalProps = {
    error: ApolloError | undefined,
    setOpenModal: Function,
    creation: string
}

const SubmitModal: React.FC<ModalProps> = (props) => {
    const { setOpenModal, error, creation } = props

    const handleClose = () => setOpenModal(false)

    return (
        <div className="w-full h-full fixed top-0 left-0">
            <div className="bg-[#00000059] w-full h-full absolute -z-10" onClick={handleClose}></div>

            <div className="flex flex-col mx-auto my-auto bg-white w-[400px] py-[10px] px-[20px] mt-[250px] rounded-md z-30">
                <h1 className="font-semibold">{error ? 'Creation failed' : 'Creation succeed'}</h1>
                <p className="">{error ? `There was an error while creating the ${creation}.` : `${creation} creation succeeded.`}</p>

                <button className="bg-[#FDDD96] mt-[20px] py-1" onClick={handleClose}>{error ? 'Try again' : 'Close'}</button>
            </div>
        </div>
    )
}

export default SubmitModal