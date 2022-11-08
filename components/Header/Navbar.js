import Link from "next/link"

import styles from "./Navbar.module.scss"

export default function Navbar(){
    return(
        <nav className = {styles.navbar}>
            <div className={styles.logo_lista}>
                <img src="/logo.svg" alt="Logo da Empresa" className={styles.img_logo}/>
                <ul className={styles.link_itens}>
                    <li><Link href="">Trilhas</Link></li>
                    <li><Link href="/glossario">Glossário</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/duvidas">Dúvidas</Link></li>
                </ul>
            </div>

            <div className={styles.container_right}>
                <form className={styles.form_class}>
                    <img src="/lupa.svg" className={styles.img_lupa} />
                    <input type="search" placeholder="Pesquisar..." className={styles.form_input}/>
                </form>
                <div className={styles.img_class}>
                    <img src="/notificacao.svg" alt="Botao de busca" className={styles.img_notificacao}/>
                </div>
                <img src="/user.svg" alt="Foto de perfil do usuario" className={styles.img_user}/>
            </div>    
        </nav>
    )
}