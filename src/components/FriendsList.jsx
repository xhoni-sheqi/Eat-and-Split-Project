import { initialFriends } from "../../costants/index.js";
import Friend from "./Friend.jsx";

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendsList;
