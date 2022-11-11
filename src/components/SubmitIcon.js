import SmallIcon from "./SmallIcon";

function SubmitIcon(props) {
    const { label, value, id, src } = props;

    return (
        <div>
            <button
                type="submit"
                id={id}
                name={id}
                {...props}
            >
                <SmallIcon label={label} src={src} />
                {value}
            </button>
        </div>
    )
}

export default SubmitIcon