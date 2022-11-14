import styles from './Login.module.scss'
import InputText from '../Input/InputText'
import Link from 'next/link'
import { Button } from '../Basics/Button'

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.tela_1}>   
                <img  src="./pc.svg"/>
                <p>Está iniciando ou em transição de carreita para a área Tech?</p>
                <p>E não sabe por onde começar?!</p>
            </div>
            <div className={styles.tela_2}>
                <img  src="./orangeLogo.svg"/>
                <InputText label="E-mail" type="email" placeholder="Insira seu e-mail aqui" required={true}/>
                <InputText label="Senha" type="password" placeholder="Insira sua senha" required={true}/>
                
                <div className={styles.tela_3}>
                    <Link href="/">Esqueceu sua senha?</Link>
                    <Button label='Entrar'onClick={() => { Router.push(`/${path}`);}}/>
                    <p>Primeiro acesso?<Link href="/"> Faça seu cadastro aqui</Link></p>
                </div>
            </div>
        </div>
    )
}