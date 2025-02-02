import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({title}) => {
  return (
    <>
      <div className="todoitem w-full bg-[#ecfcff]  rounded-md p-[10px] flex justify-between items-center">
        <h1>{title}</h1>
        <div className="buttons flex items-center">
          <FiEdit size={25} />
          <MdCheckBox size={30} />
          <MdCheckBoxOutlineBlank size={30} />
          <MdDelete size={30} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
