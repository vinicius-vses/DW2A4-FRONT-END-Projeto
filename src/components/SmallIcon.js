function SmallIcon(props) {
    const { label, src } = props
    return (
        <>
            <img
                className="icon"
                src={src}
                label={label}
                width="24px"
                height="24px"
            />
        </>
    )
}

export default SmallIcon