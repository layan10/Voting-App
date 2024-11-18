import Candidate from "../../components/Candidate/Candidate";
import { CandidatesContext } from "../../context/CandidatesContext";
import { useContext} from "react";
import { UsersContext } from "../../context/UsersContext";
import "./VotingPage.css";
import PropTypes from 'prop-types';

const VotingPage = ({ logo }) => {
  const { candidates, updateVotes } = useContext(CandidatesContext);
  const {users,updateUser} = useContext(UsersContext);
  const user = users.find(user => user.email === localStorage.getItem('email'));

  console.log("localStorageemail :", localStorage.getItem('email'));
  console.log("localStoragepassword :", localStorage.getItem('password'));
  console.log("localStorageusername :", localStorage.getItem('username'));
  

  
  const handleVote = (candidateId) => {
    updateVotes(candidateId, candidates.find(candidate => candidate.id === candidateId).votes + 1, user.id, true);
    updateUser(user.id, candidateId, true);
  };

  const handleCancelVote = (candidateId) => {
    updateVotes(candidateId, candidates.find(candidate => candidate.id === candidateId).votes - 1, user.id, false);
    updateUser(user.id, null, false);
  };

  const handleLogout = () => {
    localStorage.setItem('email', '');
    localStorage.setItem('password', '');
    localStorage.setItem('username', '');
    alert('Logout successful !'); 
    window.location.reload();
  }

  return (
    <div className="voting-page">
      <nav className="navbar">
          <img className="logo" src={logo} alt="logo" />
          <div className="user">
             <p className="username">Hello {localStorage.getItem("username")} !</p>
             <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
      </nav>
      <h1>Vote For The Cutest Pet :)</h1>
      <div className="candidates">
        {candidates.map(candidate => (
          <Candidate 
            key={candidate.id}
            candidate={candidate}
            onVote={handleVote}
            onCancelVote={handleCancelVote}
            user = {user}
          />
        ))}
      </div>
    </div>
  );
};

VotingPage.propTypes = {
  logo: PropTypes.node.isRequired,
};

export default VotingPage;
