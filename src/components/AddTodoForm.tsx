import Button from "./Button";

const AddTodoForm = () => {
  return (
    <form>
      <h2 className="font-medium text-white">Add a Todo</h2>
      <input
        type="text"
        className="bg-transparent text-white px-4 border border-gray-100/50 h-10 block w-full my-2 rounded"
      />
      <Button buttonType={""}>Add to List</Button>
    </form>
  );
};

export default AddTodoForm;
