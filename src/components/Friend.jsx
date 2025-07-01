import Button from "./Button.jsx";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      {friend.balance < 0 ? (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}{" "}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <h3>{friend.name}</h3>

      <Button onClick={() => onSelection(friend)}>
        {!isSelected ? "Select" : "Close"}
      </Button>
    </li>
  );
}

export default Friend;
