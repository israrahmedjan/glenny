import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export default function Pagination() {
  const [allUsers, setAllUsers] = useState([]); // Store all users
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [usersPerPage] = useState(3); // Number of users per page
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch all users from Firestore
  const fetchUsers = async () => {
    setLoading(true);
    const q = query(collection(db, 'users'), orderBy('name', 'asc')); // Order users by name
    const querySnapshot = await getDocs(q);

    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAllUsers(usersData);
    setLoading(false);
  };

  // Compute the users to display on the current page
  const indexOfLastUser = currentPage * usersPerPage; // Last user index
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // First user index
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser); // Users for current page

  // Change page
  const goToNextPage = () => {
    if (currentPage < Math.ceil(allUsers.length / usersPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="pagination-container">
      <h1>Firestore Users Pagination Example</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button className='p-3 border-gray-300 border' onClick={goToPreviousPage} disabled={currentPage === 1 || loading}>
          Previous
        </button>
        <button className='p-3 border-gray-300 border'
          onClick={goToNextPage}
          disabled={currentPage === Math.ceil(allUsers.length / usersPerPage) || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}
``
