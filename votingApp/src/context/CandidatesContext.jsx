import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CandidatesContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('https://6738935c4eb22e24fca855e1.mockapi.io/api/votingApp/candidates')
      .then(response => response.json())
      .then(data => setCandidates(data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  const updateVotes = async (candidateId, newVotes, userId, isVoteAdded) => {
    try {
      const updatedCandidate = candidates.find(candidate => candidate.id === candidateId);
  
      const response = await fetch(`https://6738935c4eb22e24fca855e1.mockapi.io/api/votingApp/candidates/${candidateId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedCandidate,
          votes: newVotes,
          voters: isVoteAdded 
            ? [...updatedCandidate.voters, userId]
            : updatedCandidate.voters.filter(voterId => voterId !== userId),
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update candidate votes");
      }
  
      const updatedData = await response.json();
      setCandidates(candidates.map(candidate =>
        candidate.id === candidateId ? updatedData : candidate
      ));
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  };
  
  return (
    <CandidatesContext.Provider value={{ candidates, updateVotes }}>
      {children}
    </CandidatesContext.Provider>
)};

CandidatesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};