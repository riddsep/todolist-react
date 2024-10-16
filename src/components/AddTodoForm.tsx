import Button from "./Button";
import { useState } from "react";

const AddTodoForm = ({ todos, setTodos }) => {
  const [todoItem, setTodoItem] = useState({
    id: crypto.randomUUID(),
    text: "",
    isCompleted: false,
  });
  console.log(todos);

  function handleChange(e) {
    setTodoItem((prev) => ({ ...prev, text: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prev) => [...prev, todoItem]);

    setTodoItem({
      id: crypto.randomUUID(),
      text: "",
      isCompleted: false,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-white">Add a Todo</h2>
      <input
        type="text"
        className="bg-transparent text-white px-4 border border-gray-100/50 h-10 block w-full my-2 rounded"
        value={todoItem.text}
        onChange={handleChange}
      />
      <Button buttonType="">Add to List</Button>
    </form>
  );
};

export default AddTodoForm;
