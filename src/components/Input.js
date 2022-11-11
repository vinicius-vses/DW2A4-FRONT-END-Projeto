import styles from './styles.css';

function Input(props) {
    const { label, id } = props;
    return (
        <div className="input-container">
            <label className="label"><a>{label}</a></label>
            <br />
            <input
                id={id}
                name={id}
                {...props}
            />
        </div>
    )
}

export default Input