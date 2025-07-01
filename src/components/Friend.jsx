function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.anem} />
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
    </li>
  );
}

export default Friend;
