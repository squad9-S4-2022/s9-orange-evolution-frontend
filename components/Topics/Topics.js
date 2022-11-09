import styles from './Topics.module.scss'

export default function Topics(){
    return(
        <div className={styles.div_card}>
            <ul className={styles.list_card}>
                <li>Lorem ipsum dolor sit amet, consectetur elit adi;</li>
                <li>Lorem ipsum dolor sit amet;</li>
                <li>Lorem ipsum dolor sit amet, consectetur;</li>
                <li>Lorem ipsum dolor sit amet, consectetur elit adi sed;</li>
            </ul>
        </div>
    )
}