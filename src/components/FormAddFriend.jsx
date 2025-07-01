import { useState } from "react";
import Button from "./Button.jsx";

function FormAddFriend({ onSetFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    if (!name || !url) return;
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      url: `${url}?=${id}`,
      balance: 0,
    };

    onSetFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48?");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙋Friend Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <label>🌠Image Url </label>
      <input
        type="text"
        value={"https://i.pravatar.cc/48"}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
