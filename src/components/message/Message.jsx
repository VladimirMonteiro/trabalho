import styles from './Message.module.css'



const Message = ({message}) => {

    return(
        <div className={styles.success}>
            <span>{message}</span>

        </div>
    )
}


export default Message