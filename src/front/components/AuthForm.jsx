import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, submitText, linkPath, linkText, children }) => {
    return (
        <div className="col-md-6">
            <h2>{title}</h2>
            <form>
                {children}
                <button type="submit" className="btn btn-primary">
                    {submitText}
                </button>
            </form>
            {linkPath && linkText && (
                <p className="mt-3">
                    {linkText.includes('¿No tienes') ? linkText : '¿Ya tienes'} una cuenta?{' '}
                    <Link to={linkPath}>
                        {linkText.includes('¿No tienes') ? 'Regístrate' : 'Inicia sesión'}
                    </Link>
                </p>
            )}
        </div>
    );
};

export default AuthForm;