'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"

import styles from "./page.module.css"  

const Login = () =>
{
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const toggleVisibility = () =>
    {
        setShowPassword(show => !show)
    }



    return (
        <div className={styles.container}>
            <div className={styles.log_form}>
                <h2 className={styles.log_title}>LOGAR</h2>
                <form className={styles.log_form}>
                    <input 
                        className={styles.log_input}
                        type="text" 
                        placeholder="Username" 
                        id="username" 
                        {...register('username')}
                    />

                    <input 
                        className={styles.log_input}
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password"
                        id="password"
                        {...register('password')}  
                    />

                    <div className={styles.log_showpass}>
                        <label htmlFor="showpass" className={styles.label}>Mostrar senha? </label>
                        <input type="checkbox" id="showpass" onChange={toggleVisibility}/>
                    </div>

                    <button 
                        className={styles.log_button}
                    >
                        ENTRE AGORA
                    </button>
                </form>
                <div className={styles.log_foot}>
                    <Link href="/register" className={styles.link}>Não tem conta?</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Login