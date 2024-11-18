import LoginForm from "../../components/LoginForm/LoginForm";
import PropTypes from 'prop-types';

const LoginPage = ({ logo }) => {
    return (
        <LoginForm logo = { logo } />
    ) 
};
LoginPage.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default LoginPage;
