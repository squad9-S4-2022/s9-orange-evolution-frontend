import styles from './Registration.module.scss'
import InputText from '../Input/InputText'
import Link from 'next/link'
import { Button } from '../Basics/Button'
import { useState } from 'react'

export default function Registration(){
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senha1, setSenha1] = useState('')

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
                        label="Nome"  
                        type="text"
                        name="name" 
                        placeholder="Insira seu nome aqui" 
                        required={true}
                        value={nome}
                        dadosEntrada = {valor => setNome(valor)}
                        />
                    
                    <InputText 
                        label="E-mail" 
                        type="email"
                        name="email" 
                        placeholder="Insira seu e-mail aqui" 
                        required={true}
                        value={email}
                        dadosEntrada = {valor => setEmail(valor)}
                        />
                
                    <div className={styles.tela_senha}>
                        <InputText 
                            label="Senha" 
                            type="password"
                            name="password" 
                            placeholder="Senha" 
                            required={true}
                            value={senha}
                            dadosEntrada = {valor => setSenha(valor)}
                            />
                        
                        <InputText 
                            label="Repetir Senha" 
                            type="password" 
                            name="confirmPassworld"
                            placeholder="Senha" 
                            required={true}
                            value={senha1}
                            dadosEntrada = {valor => setSenha1(valor)}
                            />
                    </div>
                
                    <div className={styles.tela_3}>
                        <Button label='Cadastrar-se'onClick={() => { Router.push(`/${path}`);}}/>
                        {/*<button type='submit'>Entrar</button>*/}
                        <p>Ja possui cadastro?<Link href="/"> Faça seu login aqui</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}