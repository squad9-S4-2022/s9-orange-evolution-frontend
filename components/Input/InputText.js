import styles from './InputText.module.scss'

export default function InputText (props){
    
    return(
        <div className={styles.campo_texto}>
            
            <label htmlFor="user">{props.label}</label>

            <input
                id="user"
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                //onChange={}
                //value={} 
            />
        </div>
    )
}