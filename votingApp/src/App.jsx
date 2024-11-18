import './App.css'
import VotingPage from './pages/VotingPage/VotingPage'
import { CandidatesProvider } from './context/CandidatesContext';
import logo from './assets/logo.jpg'
import { UsersProvider } from "./context/UsersContext";
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  const email = localStorage.getItem('email');
  if(!email){
    localStorage.setItem('email', '');
  }
  const password = localStorage.getItem('password');
  if(!password){
    localStorage.setItem('password', '');
  }
  const username = localStorage.getItem('username');
  if(!username){
    localStorage.setItem('username', '');
  }
  
  return (
    <>
      {email === '' && password === '' ? (
        <UsersProvider>
          <LoginPage logo={logo} />
        </UsersProvider>
      ) : (
        <UsersProvider>
          <CandidatesProvider>
            <VotingPage logo={logo} />
          </CandidatesProvider>
        </UsersProvider>
      )}
    </>
  )
}

export default App
