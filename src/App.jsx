import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";
import { initialFriends } from "../costants/index.js";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleAddFriendForm = () => {
    setShowAddFriend((prev) => !prev);
  };
  const handleSetFriends = (friend) => {
    setFriends((friends) => [...friends, friend]);
    handleAddFriendForm();
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onSetFriend={handleSetFriends} />}
        <Button onClick={handleAddFriendForm}>
          {showAddFriend === true ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
