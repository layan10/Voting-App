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

  return (
    <CandidatesContext.Provider value={{ candidates, setCandidates }}>
      {children}
    </CandidatesContext.Provider>
)};

CandidatesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
