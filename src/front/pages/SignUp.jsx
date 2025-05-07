import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const SignUp = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <AuthForm
                    title="Registro"
                    submitText="Registrarse"
                    linkPath="/login"
                    linkText="¿Ya tienes una cuenta?"
                >
                    <div className="mb-3">
                        <label htmlFor="signUpEmail" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="signUpEmail"
                            placeholder="Ingrese su correo electrónico"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="signUpPassword" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="signUpPassword"
                            placeholder="Contraseña"
                        />
                    </div>
                </AuthForm>
            </div>
        </div>
    );
};

export default SignUp;