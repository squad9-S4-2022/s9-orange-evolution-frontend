import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_lista}>
        <img
          src='/img/logo.svg'
          alt='Logo da Orange Juice'
          className={styles.img_logo}
        />

        <img
          src='/img/hamburger-menu.svg'
          alt='Menu'
          className={styles.mobileMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />

        <div
          className={styles.mobileMenu__links}
          style={!showMobileMenu ? { display: 'none' } : { display: 'block' }}>
          <ul>
            <li>
              <Link href='/home'>Trilhas</Link>
            </li>
            <li>
              <Link href='/minhastilhas'>Minhas Trilhas</Link>
            </li>
            <li>
              <Link href='/sobre'>Sobre</Link>
            </li>
            <li>
              <Link href='/duvidas'>Dúvidas</Link>
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
        <div className={styles.mobileSearch}>
          <img src='/lupa.svg' alt='' className={styles.mobileSearch__icon} />
        </div>

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
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        />

        <div
          className={styles.profileMenu}
          style={!showProfileMenu ? { display: 'none' } : { display: 'block' }}>
          <div className={styles.profileMenu__header}>
            <p className={styles.profileMenu__name}>Thaís Alves</p>
            <img
              src='/img/user.png'
              alt='Imagem de perfil'
              className={styles.profileMenu__avatar}
            />
          </div>
          <div className={styles.profileMenu__links}>
            <ul>
              <li className={styles.profileMenu__links_item}>
                <Link href='#' className={styles.profileMenu__links_link}>
                  Minhas trilhas
                </Link>
                <img src='/img/tracks.svg' alt='' />
              </li>
              <li className={styles.profileMenu__links_item}>
                <Link href='#' className={styles.profileMenu__links_link}>
                  Editar perfil
                </Link>
                <img src='/img/edit.svg' alt='' />
              </li>
              <li className={styles.profileMenu__links_item}>
                <Link href='#' className={styles.profileMenu__links_link}>
                  Ajuda
                </Link>
                <img src='/img/help.svg' alt='' />
              </li>
              <li className={styles.profileMenu__links_item}>
                <Link href='#' className={styles.profileMenu__links_link}>
                  Sair
                </Link>
                <img src='/img/logout.svg' alt='' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
