import { CircleX } from "lucide-react";

const DeleteButton = ({ id, setTodos }) => {
  return (
    <button
      onClick={() => setTodos((prev) => prev.filter((todo) => todo.id !== id))}
    >
      <CircleX color="#f20707" />
    </button>
  );
};

export default DeleteButton;
