import "./TaskCard.css"

function TaskCard(props) {
    return (
       <div className="taskcardContainer">
        <div className="top">
            <div className="type">{props.type}</div>
            <div className="status">{props.status}</div>
        </div>
        <div className="middle">
            <p>{props.text}</p>
        </div>
        <div className="bottom">
            <span className="text">Due Date</span>
            <p className="duedate">{props.duedate}</p>
        </div>
       </div>
    );
}

export default TaskCard; 