import './App.css'
import VotingPage from './pages/VotingPage/VotingPage'
import { CandidatesProvider } from './context/CandidatesContext';
import logo from './assets/logo.jpg'
function App() {

  return (
    <CandidatesProvider>
      <VotingPage logo = {logo} />
    </CandidatesProvider>
  )
}

export default App
