import styles from './Topics.module.scss'

const CardText = [
    'Fundamentos de HTML, CSS e Javascript', 
    'Introdução a Bancos de Dados e Linguagem SQL', 
    'Git e Github para iniciantes', 
    'Qual é a diferença entre HTTP e HTTPS?'
]

export default function Topics(){
    return(
        <div className={styles.div_card}>
            <ul className={styles.list_card}>
                {CardText.map((texto) => ( <li>{texto}</li>))}
            </ul>
        </div>
    )
}