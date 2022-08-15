import styles from "./buttons.module.css"

function PrimaryButton({children,onClick}){
    return (
        <button onClick={onClick} className={` ${styles.btn__primary}`}>{children}</button>
    )
}

export default PrimaryButton