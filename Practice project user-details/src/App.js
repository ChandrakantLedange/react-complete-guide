import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const handleAddUser = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [{ name: uName, age: uAge }, ...prevUsersList];
    });
  };
  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
