import PropTypes from 'prop-types';

const ChangeMyVote = ({ onConfirm, onCancel }) => {
    return (
        <div className="change-my-vote">
            <button className="confirm-btn" onClick={onConfirm}>
                I&apos;m Sure
            </button>
            <button className="cancel-btn" onClick={onCancel}>
                Cancel
            </button>
        </div>
)};

export default ChangeMyVote;

ChangeMyVote.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};
