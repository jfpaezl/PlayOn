import { useState } from "react";

import { LoginCss } from "./Login.style";
import data from '../../../json/home/hero.json'


export default function Login() {
    const [login, setLogin] = useState(true);
    const handleToggle = () => {
        setLogin(!login);
    }

    return (
        <LoginCss className="container">
            <h1>PlayOn</h1>
            <section className="section">
                <div className="contentLogin">
                    <section className={login ? 'container' : 'hiden'} >
                        <header className='headeLogin'>
                            <h2>Iniciar sesión</h2>
                        </header>
                        <form action="" method="post" className='formLogin'>
                            <div className='contInput'>
                                <label htmlFor="usuario" className='labelLogin'>Usuario</label>
                                <input type="text" name="usuario" id="usuario" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="password" className='labelLogin'>Contaseña</label>
                                <input type="password" name="password" id="password" className='inputLogin' />

                                <span className='linkR'>¿Tienes problemas para iniciar sesión</span>
                            </div>

                            <button className='button'>Iniciar sesión</button>
                        </form>
                        <footer className='footerLigin'>
                            <span className='linkF' onClick={handleToggle}>¿No tienes una cuenta? Registrate</span>
                        </footer>
                    </section>

                    <section className={login ? 'hiden' : 'container'}>
                        <header className='headeLogin'>
                            <h2>Registra tu cuenta</h2>
                        </header>
                        <form action="" method="post" className='formLogin'>
                            <div className='contInput'>
                                <label htmlFor="usuario" className='labelLogin'>Usuario</label>
                                <input type="text" name="usuario" id="usuario" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="email" className='labelLogin'>Email</label>
                                <input type="email" name="email" id="email" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="password" className='labelLogin'>Contaseña</label>
                                <input type="password" name="password" id="password" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="password2" className='labelLogin'>Confirmar Contaseña</label>
                                <input type="password" name="password2" id="password2" className='inputLogin' />
                            </div>
                            <span className='linkR'>¿Tienes problemas para registrar tu cuenta?</span>
                            <button className='button'>Siguiente paso</button>
                        </form>
                        <span className='linkF' onClick={handleToggle}>¿Ya eres usuario de PlayOn? Inicia sesión</span>
                    </section>
                </div>
                {data.map((item) => (
                    <img key={item.id} src={item.image} alt={item.title} />
                ))}
            </section>
        </LoginCss>
    )
}