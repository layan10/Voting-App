import './Candidate.css';
import dog from '../../assets/dog.jpg';
import { useState } from 'react';
import ChangeMyVote from '../ChangeMyVote/ChangeMyVote';

const Candidate = () => {
    const [votes, setVotes] = useState(0);
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
            <img src={dog} alt="dog" />
            <h3 className="candidate-name">Kinder</h3>
            {!showChangeVoteOptions ? (
                <button onClick={btnTitle === 'Vote' ? handleVote : handleChangeVoteClick}>
                    {btnTitle}
                </button>
            ) : (
                <ChangeMyVote onConfirm={handleConfirmChange} onCancel={handleCancelChange}/>
            )}
            <p>
                Votes: <span>{votes}</span>
            </p>
        </div>
    );
};

export default Candidate;
