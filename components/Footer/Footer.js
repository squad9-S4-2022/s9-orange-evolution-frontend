import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer(){
    return(
        <footer className={styles.container}>
            <div className={styles.footer_left}>
                <Link href="https://fcamara.com.br/"><img src="/logoFooter.svg" alt="Logo Grupo FCamara"/></Link>
                <ul className={styles.list_img}>
                    <li>
                        <Link href="https://www.facebook.com/orangejuicefc/"><img src="/iconFacebook.svg" alt="Logo Facebook"/></Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/orangejuicetech/"><img src="/iconInstagram.svg" alt="Logo Instagram"/></Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/company/orangejuicetech/"><img src="/iconLinkedin.svg" alt="Logo Linkedin"/></Link>
                    </li>
                    <li>
                        <Link href="https://www.youtube.com/c/orangejuicefc"><img src="/iconYoutube.svg" alt="Logo YouTube"/></Link>
                    </li>
                </ul>
            </div>

            <div className={styles.footer_rigth}>
                <ul className={styles.list_link}>
                    <li>
                        <Link href="/">O que é</Link>
                    </li>
                    <li>
                        <Link href="/">Que trilha eu posso fazer?</Link>
                    </li>
                    <li>
                        <Link href="https://digital.fcamara.com.br/orangejuice">Orange Juice</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}