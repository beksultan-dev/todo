import styles from './Button.module.css';

function Button(props) {
    const {children, onClick, title, disabled = false} = props;

    return (
        <button {...props} className={styles.button} onClick={onClick} title={title}>
            {children}
        </button>
    );
}

export default Button;
