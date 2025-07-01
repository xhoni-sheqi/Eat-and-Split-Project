import Button from "./Button.jsx";

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🙋Friend Name</label>
      <input type="text" />

      <label>🌠Image Url </label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
