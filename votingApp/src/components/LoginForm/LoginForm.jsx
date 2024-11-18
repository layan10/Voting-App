import PropTypes from 'prop-types';
import './LoginForm.css';
import { useState } from 'react';

const LoginForm = ({ logo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="login-form">
            <div className="logo-container">
                <img src={logo} alt="Logo" />
                <h2 className="form-title">Christmas Competition</h2>
            </div>
            <div className="form-input">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" name="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" type="password" name="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default LoginForm;