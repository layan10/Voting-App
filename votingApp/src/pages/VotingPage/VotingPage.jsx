import Candidate from "../../components/Candidate/Candidate";
import { CandidatesContext } from "../../context/CandidatesContext";
import { useContext } from "react";
import "./VotingPage.css";
import PropTypes from 'prop-types';

const VotingPage = ({logo}) => {
  const { candidates } = useContext(CandidatesContext);

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
          <Candidate key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

VotingPage.propTypes = {
  logo: PropTypes.node.isRequired,
};

export default VotingPage;
