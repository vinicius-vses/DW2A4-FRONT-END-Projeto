import styles from './styles.css';

function Textarea(props) {
    const { label, id } = props;
    return (
        <div className="input-container">
            <label className="label"><a>{label}</a></label>
            <br />
            <Textarea
                id={id}
                name={id}
                {...props}
            />
        </div>
    )
}

export default Textarea