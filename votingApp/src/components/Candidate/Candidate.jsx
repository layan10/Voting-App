import './Candidate.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChangeMyVote from '../ChangeMyVote/ChangeMyVote';
//import CircularProgress from '@mui/material/CircularProgress';


const Candidate = ({ candidate, onVote, onCancelVote, user }) => {
  /*while(!user){
    <CircularProgress />
  }*/
  const [showChangeVoteOptions, setShowChangeVoteOptions] = useState(false);

  const handleVote = () => {
    onVote(candidate.id);
  };

  const handleChangeVoteClick = () => {
    setShowChangeVoteOptions(true);
  };

  const handleConfirmChange = () => {
    setShowChangeVoteOptions(false);
    onCancelVote(candidate.id);
  };

  const handleCancelChange = () => {
    setShowChangeVoteOptions(false);
  };

  const votedFor = !user ? localStorage.getItem('votedFor') : user.votedFor;
  const voted = !user ? localStorage.getItem('voted') : user.voted;

  const renderButton = () => {
    if (voted && votedFor === candidate.id) {
      return (
        <button onClick={handleChangeVoteClick}>Change My Vote!</button>
      );
    } else if (!voted) {
      return (
        <button onClick={handleVote}>Vote</button>
      );
    }
    return null;
  };

  return (
    <div className="candidate">
      <img src={candidate.image} alt={candidate.name} />
      <h3 className="candidate-name">{candidate.name}</h3>
      {!showChangeVoteOptions ? (
        renderButton()
      ) : (
        <ChangeMyVote onConfirm={handleConfirmChange} onCancel={handleCancelChange} />
      )}
      <p>
        Votes: <span>{candidate.votes}</span>
      </p>
    </div>
  );
};

Candidate.propTypes = {
  candidate: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
  onCancelVote: PropTypes.func.isRequired,
  user: PropTypes.shape({
    voted: PropTypes.bool.isRequired,
    votedFor: PropTypes.string,
  }).isRequired,
};

export default Candidate;
