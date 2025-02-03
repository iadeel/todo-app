import { IoMdAdd } from "react-icons/io";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoMain = () => {
  const [todoItems, settodoItems] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  const addTodo = () => {
    const myNewTodo = {
      id: new Date().getTime(),
      title: newTodo,
      completed: false,
    };
    const newArray = [myNewTodo, ...todoItems];
    settodoItems(newArray);
    setnewTodo("");
  };

  const markTodoAsCompleted = (todoId) => {
    console.log("i got this todo : ", todoId);
    const editedArr = todoItems.map((item) => {
      if (item.id === todoId) {
        return {
          id: item.id,
          title: item.title,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    settodoItems(editedArr);
  };

  const deleteThisTodo = (todoId) => {
    const filteredArray = todoItems.filter((item) => item.id != todoId);
    settodoItems(filteredArray);
  };
 


  const editThisTodo = (todoId) =>{
    var newTitle = prompt("Enter New Value of Todo :")
    const editedArr = todoItems.map((item) => {
      if (item.id === todoId) {
        // settodoItems.title(newTitle)
        return { ...item, title: newTitle };
      } else {
        // settodoItems.title(item.title)
        return item;
      }
    });
    settodoItems(editedArr);
    
  } ;

  const setTodosInLocalStorage = () => {
    const myTodos = JSON.stringify(todoItems);
    localStorage.setItem("todoList", myTodos);
  };

  useEffect(() => {
    const localStorageItems = localStorage.getItem("todoList");
    const localStorageItemsParsed = JSON.parse(localStorageItems);
    settodoItems(localStorageItemsParsed);
  }, []);

  useEffect(() => {
    setTodosInLocalStorage();
  }, [todoItems]);

  return (
    <>
      {/* bg-[#c7f7ff] */}
      <div className="main justify-between h-[550px] w-[800px] gap-[20px] flex flex-col  bg-white rounded-4xl border-2 py-[30px] px-[10px] items-center">
        <div className="todoItems flex flex-col items-center gap-3.5 h-[400px] overflow-auto w-[92%] py-[10]">
          <h1 className="text-[30px] font-bold">Todo App</h1>
          {/* <h2 className="text-[15px] text-left">Todo Items for Today</h2> */}

          <div className="todoItems flex flex-col gap-3.5 h-[400px] overflow-auto w-[95%] py-[10]">
            {todoItems.map((item, index) => (
              <TodoItem
                todoItem={item}
                key={index}
                markTodoAsCompleted={markTodoAsCompleted}
                deleteThisTodo={deleteThisTodo}
                editThisTodo={editThisTodo}
              />
            ))}
          </div>
        </div>
        <div className="transition-all inputDiv w-[100%] h-[50px] gap-[15px] rounded-md flex items-center justify-center px-[20px] py-10px">
          <input
            className=" outline-0 border-1 w-[100%] bg-white h-[50px] rounded-4xl px-[20px]"
            type="text"
            placeholder="Enter Todo"
            value={newTodo}
            onChange={(e) => {
              setnewTodo(e.target.value);
            }}
          />

          {newTodo.length > 2 ? (
            <button
              onClick={addTodo}
              className="transition-opacity duration-500 ease-in    cursor-pointer bg-black border h-[50px] w-[50px] flex justify-center items-center rounded-4xl "
            >
              <IoMdAdd color="white" size={30} />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TodoMain;
