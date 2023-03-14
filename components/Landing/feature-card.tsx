type FeatureCardData = {
    title: string;
    text: string;
    icon: JSX.Element;
}

export type FeatureCardProps = {
    data: FeatureCardData;
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
    const { data } = props;
    const { title, text, icon } = data;

    return (
        <div className='flex flex-col w-[260px] p-4 border-[2px] border-[#303030] rounded-md hover:border-[#FDDD96] group cursor-pointer transition duration-100'>
            <div className='flex justify-center items-center bg-[#FDDD96] rounded-2xl h-[70px] w-[70px] mb-[20px] group-hover:scale-105 transition-transform'>
                {icon}
            </div>

            <h4 className='mb-2 text-2xl font-bold font-rubik text-white'>{title}</h4>
            <p className='font-rubik text-lg text-white'>{text}</p>
        </div>
    )
}

export default FeatureCard