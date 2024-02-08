const Error = ({ children }) => {
    return (
        <div className="bg-red-800 text-white text-[15px] font-bold rounded-md p-3 mb-3 uppercase text-center">
            <p>{children}</p>
        </div>
    )
}

export default Error