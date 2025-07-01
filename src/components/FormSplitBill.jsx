import { useState } from "react";

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  let paidByFriend = bill ? bill - paidByUser : "";
  const [whosIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form className="form-split-bill">
      <h2>Split The Bill with {selectedFriend.name}</h2>

      <label>💶 Bill Value</label>
      <input type="text" onChange={(e) => setBill(Number(e.target.value))} />

      <label>🤑 Your Expense</label>
      <input
        type="text"
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>🤑 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>💰Who's paying the bill ? </label>
      <select>
        <option value="user">You</option>
        <option value="friend" onChange={(e) => setWhoIsPaying(e.target.value)}>
          {selectedFriend.name}
        </option>
      </select>
    </form>
  );
}

export default FormSplitBill;
