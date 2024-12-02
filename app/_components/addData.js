import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs, startAfter, endBefore,endAt } from "firebase/firestore";
import { useEffect, useState } from "react";
import React from 'react';

function AddData() {
  const [data, setData] = useState([]);
  const [firstVisible, setFirstVisible] = useState(null);  // Track first document for pagination
  const [lastVisible, setLastVisible] = useState(null);    // Track last document for pagination
  const usersCollection = collection(db, "users");

  const pageSize = 3; // Number of documents per page

  // Fetch the first page of data
  const fetchFirstPage = async () => {
    const q = query(usersCollection, orderBy("age"), limit(pageSize));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      // Save the first and last document for pagination
      const firstDoc = snapshot.docs[0];
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      // Extract the data from the snapshot and set it in the state
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the data and pagination state to display it in the component
      setData(data);  // Set new data, not appending
      setFirstVisible(firstDoc);
      setLastVisible(lastDoc);
    }
  };

  // Fetch the next page of data
  const fetchNextPage = async () => {
    if (!lastVisible) return; // No more pages

    const q = query(
      usersCollection,
      orderBy("age"),
      startAfter(lastVisible), // Start after the last document of the previous query
      limit(pageSize)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      // Update the first and last visible documents for pagination
      const firstDoc = snapshot.docs[0];
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      // Extract the data from the snapshot and replace the old data
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the new data for the next page (replacing old data)
      setData(newData);  // Replace old data with new data
      setFirstVisible(firstDoc);
      setLastVisible(lastDoc);
    } else {
      console.log("No more documents");
    }
  };

  // Fetch the previous page of data
  const fetchPreviousPage = async () => {
    if (!firstVisible) return; // No previous pages

    const q = query(
      usersCollection,
      orderBy("age"),
      endBefore(firstVisible), // End before the first document of the current query
      limit(pageSize)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      // Update the first and last visible documents for pagination
      const firstDoc = snapshot.docs[0];
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      // Extract the data from the snapshot and set it in the state
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the new data (no need to append or replace the old data)
      setData(newData);  // Replace old data with new data
      setFirstVisible(firstDoc);
      setLastVisible(lastDoc);
    } else {
      console.log("No previous documents");
    }
  };

  useEffect(() => {
    // Fetch the first page when the component mounts
    fetchFirstPage();
  }, []);

  return (
    <>
      <h1 className="text-[25px] font-semibold">Pagination Testing..</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the data in formatted JSON */}

      <button
        onClick={fetchPreviousPage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Previous Page
      </button>
      <span>--</span>
      <button
        onClick={fetchNextPage}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next Page
      </button>
    </>
  );
}

export default AddData;
