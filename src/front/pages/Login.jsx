import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <AuthForm
                    title="Iniciar Sesión"
                    submitText="Iniciar Sesión"
                    linkPath="/signup"
                    linkText="¿No tienes una cuenta?"
                >
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="loginEmail"
                            placeholder="Ingrese su correo electrónico"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="loginPassword"
                            placeholder="Contraseña"
                        />
                    </div>
                </AuthForm>
            </div>
        </div>
    );
};

export default Login;