import { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({logo , users}) => {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
    
        if (user) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password );
            alert('Login successful');
        } else {
            alert('Invalid email or password');
        }
    };

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
            <button type="submit" className="login-button" onClick={handleLogin}>Login to Vote!</button>
        </form>
    );
};

LoginForm.propTypes = {
    logo: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            email: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LoginForm;