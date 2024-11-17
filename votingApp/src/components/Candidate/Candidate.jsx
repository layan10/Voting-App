import './Candidate.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChangeMyVote from '../ChangeMyVote/ChangeMyVote';

const Candidate = ({ candidate }) => {
    const [votes, setVotes] = useState(candidate.votes);
    const [btnTitle, setBtnTitle] = useState('Vote');
    const [showChangeVoteOptions, setShowChangeVoteOptions] = useState(false);

    const handleVote = () => {
        setVotes(votes + 1);
        setBtnTitle('Change My Vote');
    };

    const handleChangeVoteClick = () => {
        setShowChangeVoteOptions(true);
    };

    const handleConfirmChange = () => {
        setVotes(votes - 1);
        setBtnTitle('Vote');
        setShowChangeVoteOptions(false);
    };

    const handleCancelChange = () => {
        setShowChangeVoteOptions(false);
    };

    return (
        <div className="candidate">
            <img src={candidate.image} alt={candidate.name} />
            <h3 className="candidate-name">{candidate.name}</h3>
            {!showChangeVoteOptions ? (
                <button onClick={btnTitle === 'Vote' ? handleVote : handleChangeVoteClick}>
                    {btnTitle}
                </button>
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
        votes: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Candidate;
