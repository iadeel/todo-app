import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({todoItem, markTodoAsCompleted, deleteThisTodo,editThisTodo }) => {
  return (
    <>
      <div className="todoitem w-full bg-white border  rounded-md p-[10px] flex justify-between items-center ">
        <h1>{todoItem.title}</h1>
        <div className="buttons flex items-center">
          
          <button onClick={()=>{
            editThisTodo(todoItem?.id);
          }} className="cursor-pointer">
          <FiEdit size={25} />
          </button>
          <button className="cursor-pointer" onClick={() => {
            markTodoAsCompleted(todoItem?.id);
          }}>
          
          
          {todoItem.completed ? (
            <MdCheckBox size={30} />
          ) : (
          <MdCheckBoxOutlineBlank size={30} />
          )}
          </button>
          <button className="cursor-pointer" onClick={() => {
            var removed = prompt("Do you want to delete the item?")
            if(removed == "yes"){
              deleteThisTodo(todoItem?.id);
              alert("Item will be Deleted!")
            }else{
              alert("Item will not Deleted!")
            }
          }}>
          <MdDelete size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
