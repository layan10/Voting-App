import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://6738935c4eb22e24fca855e1.mockapi.io/api/votingApp/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error("Error fetching users:", error));
    }, []);

  const updateUser = async (userId, votedFor, voteAdded) => {
    try {
      const updatedUser = users.find(user => user.id === userId);
  
      const response = await fetch(`https://6738935c4eb22e24fca855e1.mockapi.io/api/votingApp/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedUser,
          voted: voteAdded,
          votedFor: voteAdded ? votedFor : "",
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update user votes");
      }
  
      const updatedData = await response.json();
  
      setUsers(users.map(user =>
        user.id === userId ? updatedData : user
      ));
    } catch (error) {
      console.error("Error updating user votes:", error);
    }
  };
  
  return (
    <UsersContext.Provider value={{ users, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
};
