// pages/addData.js
import { collection, addDoc, getDocs,query,where,orderBy  } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export default function AddData() {
  const [users,setusers] = useState();
  const [userorder1,setuserorder1] = useState("asc");
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: "Zubair",
        email: "ahmed@gmail.com",
        age: 30,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async ()=>
  {

    try {
      const querySnapshot = await getDocs( query(
        collection(db, "users"), 
        orderBy("name", userorder1)
      )); 

      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    //  console.log("Get Data",data);
      setusers(data);
    }
    catch(error)
    {
      console.log(error);
    }

  }
  const userOrder = async(e)=>
  {
    setuserorder1(e.target.value);
    
  }

  useEffect(()=>
  {
    
    setuserorder1(userorder1);
    console.log("Useffect is called",userorder1);
    getData();
  },[userorder1])
  return (
    <>
    <div>
      <h1>Add Data to Firestore</h1>
      <button onClick={addData} className="cursor-pointer border-gray-400 border p-3">Add User</button>
      <button onClick={getData} className="cursor-pointer border-gray-400 border p-3">Get User</button>
    </div>

    <div>
      <select name="userOrder" className="border-gray-500 border p-3" onChange={userOrder}>
      <option>Select</option>
        <option value="asc">ASC - Title</option>
        <option value="desc">Desc - Title </option>
      </select>
    </div>
    <div>
      {userorder1}
      <pre>
      {JSON.stringify(users,null,2)}
      </pre>
      </div>
    </>
  );
}
