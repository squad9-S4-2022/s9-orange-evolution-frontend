import styles from './InputText.module.scss'

export default function InputText (props){
    
    return(
        <div className={styles.campo_texto}>
            
            <label htmlFor={props.id}>{props.label}</label>

            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                //onChange={}
                //value={} 
            />
        </div>
    )
}