import styles from './Login.module.scss'
import InputText from '../Input/InputText'
import Link from 'next/link'
import { Button } from '../Basics/Button'
import { useState } from 'react'

export default function Login(){
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.tela_1}>   
                <img  src="./pc.svg"/>
                <p>Está iniciando ou em transição de carreita para a área Tech?</p>
                <p>E não sabe por onde começar?!</p>
            </div>
            <div className={styles.tela_2}>
                <form onSubmit={handleSubmit}>
                    <InputText 
                        label="E-mail" 
                        type="email" 
                        name="email"
                        placeholder="Insira seu e-mail aqui" 
                        required={true}
                        value={email}
                        dadosEntrada = {valor => setEmail(valor)}
                        />

                    <InputText 
                        label="Senha" 
                        type="password"
                        name="password" 
                        placeholder="Insira sua senha" 
                        required={true}
                        value={senha}
                        dadosEntrada = {valor => setSenha(valor)}
                        />
                
                    <div className={styles.tela_3}>
                        <Link href="/">Esqueceu sua senha?</Link>
                        <Button label='Login'onClick={() => { Router.push(`/${path}`);}}/>
                        <p>Primeiro acesso?<Link href="/"> Faça seu cadastro aqui</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}