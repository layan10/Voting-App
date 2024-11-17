import './Candidate.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChangeMyVote from '../ChangeMyVote/ChangeMyVote';

const Candidate = ({ candidate, votedCandidateId, onVote, onCancelVote }) => {
  const [votes, setVotes] = useState(candidate.votes);
  const [btnTitle, setBtnTitle] = useState('Vote');
  const [showChangeVoteOptions, setShowChangeVoteOptions] = useState(false);

  const handleVote = () => {
    setVotes(votes + 1);
    setBtnTitle('Change My Vote');
    onVote(candidate.id); 
  };

  const handleChangeVoteClick = () => {
    setShowChangeVoteOptions(true);
  };

  const handleConfirmChange = () => {
    setVotes(votes - 1);
    setBtnTitle('Vote');
    setShowChangeVoteOptions(false);
    onCancelVote(); 
  };

  const handleCancelChange = () => {
    setShowChangeVoteOptions(false);
  };

  const shouldShowVoteButton =
    votedCandidateId === null || votedCandidateId === candidate.id;

  return (
    <div className="candidate">
      <img src={candidate.image} alt={candidate.name} />
      <h3 className="candidate-name">{candidate.name}</h3>
      {!showChangeVoteOptions ? (
        shouldShowVoteButton && (
          <button
            onClick={btnTitle === 'Vote' ? handleVote : handleChangeVoteClick}
          >
            {btnTitle}
          </button>
        )
      ) : (
        <ChangeMyVote onConfirm={handleConfirmChange} onCancel={handleCancelChange} />
      )}
      <p>
        Votes: <span>{votes}</span>
      </p>
    </div>
  );
};

Candidate.propTypes = {
  candidate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  votedCandidateId: PropTypes.number,
  onVote: PropTypes.func.isRequired,
  onCancelVote: PropTypes.func.isRequired,
};

export default Candidate;
