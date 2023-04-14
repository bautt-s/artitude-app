import { ApolloError } from "@apollo/client"
import { useSelector } from "react-redux"
import { RootState } from "redux/store"

type ModalProps = {
    error: ApolloError | undefined,
    setOpenModal: Function,
    creation: string
}

const SubmitModal: React.FC<ModalProps> = (props) => {
    const { setOpenModal, error, creation } = props

    const darkMode = useSelector((state: RootState) => state.darkMode.toggled)

    const handleClose = () => setOpenModal(false)

    return (
        <div className={`w-full h-full fixed top-0 left-0 ${darkMode ? 'dark' : 'light'}`}>
            <div className="bg-[#00000059] w-full h-full absolute -z-10" onClick={handleClose}></div>

            <div className="flex flex-col mx-auto my-auto bg-white dark:bg-[#0A0A0A] dark:text-white w-[400px] py-[10px] px-[20px] mt-[250px] rounded-md z-30">
                <h1 className="font-semibold">{error ? 'Creation failed' : 'Creation succeed'}</h1>
                <p className="">{error ? `There was an error while creating the ${creation}.` : `${creation} creation succeeded.`}</p>

                <button className="bg-[#FDDD96] mt-[20px] py-1 dark:text-black" onClick={handleClose}>{error ? 'Try again' : 'Close'}</button>
            </div>
        </div>
    )
}

export default SubmitModal