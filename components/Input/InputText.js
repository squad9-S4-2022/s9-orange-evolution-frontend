import styles from './InputText.module.scss'

export default function InputText (props){
    
    const entrada = (e) => {
        props.dadosEntrada(e.target.value)
    }

    return(
        <div className={styles.campo_texto}>
            
            <label htmlFor={props.id}>{props.label}</label>

            <input
                id={props.id}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                onChange={entrada}
                value={props.value} 
            />
        </div>
    )
}