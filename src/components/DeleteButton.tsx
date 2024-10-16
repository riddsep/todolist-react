import { CircleX } from "lucide-react";

const DeleteButton = ({ handleDelete }) => {
  return (
    <button onClick={handleDelete}>
      <CircleX color="#f20707" />
    </button>
  );
};

export default DeleteButton;
