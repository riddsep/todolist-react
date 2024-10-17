import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const Sidebar = ({ todos, setTodos }) => {
  return (
    <section className="no-scrollbar flex flex-col justify-between col-[2/3] row-[2/3] bg-[#0A0A0A] border-l border-gray-100/50 rounded-br-xl px-6 pt-4 pb-7">
      <AddTodoForm todos={todos} setTodos={setTodos} />

      <div className="space-y-2">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
};

export default Sidebar;
