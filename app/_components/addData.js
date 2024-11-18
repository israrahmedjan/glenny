// pages/addData.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function AddData() {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: "Israr Ahmed jan",
        email: "ahmed@gmail.com",
        age: 30,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1>Add Data to Firestore</h1>
      <button onClick={addData}>Add User</button>
    </div>
  );
}
