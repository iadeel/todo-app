import { IoMdAdd } from "react-icons/io";
import TodoItem from "./TodoItem";

const TodoMain = () => {

const [TodoItems, setTodoItems] = useState([])


  return (
    <>
      <div className="main h-[550px] w-[500px] gap-[20px] flex flex-col bg-[#c7f7ff] rounded-4xl py-[40px] px-[10px] items-center">
        <h1 className="text-[30px] font-bold">Todo App</h1>
        <div className="inputDiv w-[100%] h-[50px] rounded-md flex items-center justify-between px-[20px] py-10px">
          <input
            className="outline-0 border-0 bg-white w-[85%] h-[50px] rounded-md px-[20px]"
            type="text"
          />
          <button className="cursor-pointer bg-[#00d9ff] h-[50px] w-[50px] flex justify-center items-center rounded-md ">
            <IoMdAdd color="black" size={30} />
          </button>
        </div>
        <h2 className="text-[15px] text-left">Todo Items for Today</h2>

        <div className="todoItems flex flex-col gap-3.5 h-[400px] overflow-auto w-[92%] py-[10]">
          <TodoItem title={"Hello"} />
        </div>
      </div>
    </>
  );
};

export default TodoMain;
