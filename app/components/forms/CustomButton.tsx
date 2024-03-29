interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}


const CustomButton: React.FC<CustomButtonProps> = ({label, className, onClick}) => {
    return(
        <div 
            onClick={onClick}
            className={`py-4 bg-airbnb hover:bg-airbnb-dark text-white text-center rounded-xl cursor-pointer transition duration-500 ease-in-out ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;