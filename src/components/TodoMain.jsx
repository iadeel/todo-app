import { IoMdAdd } from "react-icons/io";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoMain = () => {

const [TodoItems, setTodoItems] = useState([])


  return (
    <>
    {/* bg-[#c7f7ff] */}
      <div className="main justify-between h-[550px] w-[800px] gap-[20px] flex flex-col  bg-white rounded-4xl border-2 py-[30px] px-[10px] items-center">
        <div className="todoItems flex flex-col items-center gap-3.5 h-[400px] overflow-auto w-[92%] py-[10]">

        <h1 className="text-[30px] font-bold">Todo App</h1>
        {/* <h2 className="text-[15px] text-left">Todo Items for Today</h2> */}

        <div className="todoItems flex flex-col gap-3.5 h-[400px] overflow-auto w-[92%] py-[10]">
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
          <TodoItem title={"Hello"} />
        </div>
        </div>
        <div className="inputDiv w-[100%] h-[50px] rounded-md flex items-center justify-between px-[20px] py-10px">
          <input
            className="outline-0 border-1 bg-white w-[90%] h-[50px] rounded-4xl px-[20px]"
            type="text"
            placeholder="Enter Todo"
          />
          <button className="cursor-pointer bg-black border h-[50px] w-[50px] flex justify-center items-center rounded-4xl ">
            <IoMdAdd color="white" size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoMain;
