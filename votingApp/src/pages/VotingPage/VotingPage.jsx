import Candidate from "../../components/Candidate/Candidate";
import { CandidatesContext } from "../../context/CandidatesContext";
import { useContext, useState } from "react";
import "./VotingPage.css";
import PropTypes from 'prop-types';

const VotingPage = ({ logo }) => {
  const { candidates } = useContext(CandidatesContext);
  const [votedCandidateId, setVotedCandidateId] = useState(null);

  const handleVote = (candidateId) => {
    setVotedCandidateId(candidateId);
  };

  const handleCancelVote = () => {
    setVotedCandidateId(null);
  };

  return (
    <div className="voting-page">
      <nav>
        <ul className="navbar">
          <img className="logo" src={logo} alt="logo" />
          <li>Hello username !</li>
        </ul>
      </nav>
      <h1>Voting Page</h1>
      <div className="candidates">
        {candidates.map(candidate => (
          <Candidate
            key={candidate.id}
            candidate={candidate}
            votedCandidateId={votedCandidateId}
            onVote={handleVote}
            onCancelVote={handleCancelVote}
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
