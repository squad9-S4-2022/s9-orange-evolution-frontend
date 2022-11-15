import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';


export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(true)
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_lista}>
        <img
          src='/img/logo.svg'
          alt='Logo da Orange Juice'
          className={styles.img_logo}
        />

        <img src='/img/hamburger-menu.svg' alt="Menu" className={styles.mobileMenu} onClick={() => setShowMobileMenu(!showMobileMenu)}/>

        <div className={styles.mobileMenu__links} style={!showMobileMenu ? {display: 'none'} : {display: 'block'}}>
          <ul>
            <li>
              <Link href="/home">Trilhas</Link>
            </li>
            <li>
              <Link href="/minhastilhas">Minhas Trilhas</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/duvidas">Dúvidas</Link>
            </li>
          </ul>
        </div>
        <ul className={styles.link_itens}>
          <li>
            <Link href='/home'>Home</Link>
          </li>
          <li>
            <Link href='/minhastrilhas'>Minhas Trilhas</Link>
          </li>
          <li>
            <Link href='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link href='/duvidas'>Dúvidas</Link>
          </li>
        </ul>
      </div>

      <div className={styles.container_right}>
        <form className={styles.form_class}>
          <img src='/lupa.svg' className={styles.img_lupa} />
          <input
            type='search'
            placeholder='Pesquisar...'
            className={styles.form_input}
          />
        </form>
        <div className={styles.img_class}>
          <img
            src='/notificacao.svg'
            alt='Botao de busca'
            className={styles.img_notificacao}
          />
        </div>
        <img
          src='/img/user.png'
          alt='Foto de perfil do usuario'
          className={styles.img_user}
        />
      </div>
    </nav>
  );
}
