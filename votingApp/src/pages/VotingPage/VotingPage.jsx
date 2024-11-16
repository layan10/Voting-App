import Candidate from "../../components/Candidate/Candidate";
import "./VotingPage.css";

const VotingPage = () => {
  
  return (
    <div className="voting-page">
      <nav>
        <ul className="navbar">
          <li>Logo</li>
          <li>Hello username !</li>
        </ul>
      </nav>
      <h1>Voting Page</h1>
      <div className="candites">
        <Candidate />
        <Candidate />
        <Candidate />
        <Candidate />
      </div>
    </div>
  );
};

export default VotingPage;