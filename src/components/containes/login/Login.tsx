import { LoginCss } from "./Login.style";
import { useLogin } from "./useLogin";

export default function Login() {
    const { login, handleToggle, handleLogin, handleRegister, error, message } = useLogin()
    return (
        <LoginCss className="container">
            <h1>PlayOn</h1>
            <section className="section">
                <div className="contentLogin">
                    <section className={login ? 'container' : 'hiden'} >
                        {message ? <span className='message'>{message}</span> : null}
                        <header className='headeLogin'>
                            <h2>Iniciar sesión</h2>
                        </header>
                        <form method="post" className='formLogin' onSubmit={handleLogin}>
                            <div className='contInput'>
                                <label htmlFor="loginEmail" className='labelLogin'>email</label>
                                {error?.userEmail ? <span className='error'>{error?.userEmail}</span> : null}
                                <input type="email" name="loginEmail" id="loginEmail" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="loginPassword" className='labelLogin'>Contaseña</label>
                                {error?.userPassword ? <span className='error'>{error?.userPassword}</span> : null}
                                <input type="password" name="loginPassword" id="loginPassword" className='inputLogin' />

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
                        <form method="post" className='formLogin' onSubmit={handleRegister}>
                            <div className='contInput'>
                                <label htmlFor="usuario" className='labelLogin'>Usuario</label>
                                {error?.usuario ? <span className='error'>{error?.usuario}</span> : null}
                                <input type="text" name="usuario" id="usuario" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="email" className='labelLogin'>Email</label>
                                {error?.email ? <span className='error'>{error?.email}</span> : null}
                                {error?.exist ? <span className='error'>{error?.exist}</span> : null}
                                <input type="email" name="email" id="email" className='inputLogin' />
                            </div>
                            <div className='contInput'>
                                <label htmlFor="password" className='labelLogin'>Contaseña</label>
                                {error?.password ? <span className='error'>{error?.password}</span> : null}
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
            </section>
        </LoginCss>
    )
}