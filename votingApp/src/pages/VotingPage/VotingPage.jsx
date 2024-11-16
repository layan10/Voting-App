import Canadidate from "../../components/Canadidate/Canadidate";
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
      <div className="canadites">
        <Canadidate />
        <Canadidate />
        <Canadidate />
        <Canadidate />
      </div>
    </div>
  );
};

export default VotingPage;