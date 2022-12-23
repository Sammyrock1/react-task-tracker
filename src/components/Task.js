import { FaTimes } from "react-icons/fa";
import DoubleClick from "./doubleClick";

const Task = ({task,onDelete,onToggle}) => {
    
    return (
      <DoubleClick onDoubleClick={() => onToggle(task.id)}>
        <div className={`task ${task.reminder ? "reminder" : ""}`}
        >
          <>
            <h3>
              {task.text}{" "}
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(task.id)}
              />
            </h3>
          </>
          <p>{task.day}</p>
        </div>
      </DoubleClick>
    );
}

export default Task;