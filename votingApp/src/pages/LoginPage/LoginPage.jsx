import LoginForm from "../../components/LoginForm/LoginForm";
import PropTypes from 'prop-types';
import { useContext} from 'react';
import { UsersContext } from '../../context/UsersContext';

const LoginPage = ({ logo}) => {
  const { users } = useContext(UsersContext);

    return (
        <LoginForm logo = { logo } users={users}/>
    ) 
};

LoginPage.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default LoginPage;
