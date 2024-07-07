import "./TaskCard.css"

function TaskCard() {
    const type1 = "T-1";
    const status1 = "Todo";
    const text1 = "Create a design system for Enum Workspace";
    const duedate1 = "24 / 01 / 2021";

    return (
       <div className="taskcardContainer">
        <div className="top">
            <div className="type">{type1}</div>
            <div className="status">{status1}</div>
        </div>
        <div className="middle">
            <p>{text1}</p>
        </div>
        <div className="bottom">
            <span>Due Date</span>
            <p>{duedate1}</p>
        </div>
       </div>
    );
}

export default TaskCard; 