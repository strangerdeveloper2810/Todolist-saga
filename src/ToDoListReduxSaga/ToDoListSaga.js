import React, { useState } from "react";
import "./ToDoListSaga.css";
export default function ToDoListSaga(props) {
  const renderDate = () => {
    const date = new Date();
    return (
      <div>
        <p>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " - " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds()}
        </p>
      </div>
    );
  };

  const [state, setState] = useState({
    taskList: [],
    values: {
      taskName: "",
    },
    error: {
      taskName: "",
    },
  });

  const handleChangeInput = (event) => {
    let { name, value } = event.target;

    const newValues = { ...state.values, [name]: value };

    const newError = { ...state.error };

      let regexString = /^[a-z A-Z 0-9]+$/;

    if (!regexString.test() || value.trim() === "") {
      newError[name] = name + " is invalid !";
    } else {
      newError[name] = " ";
    }

    setState({
      ...state,
      values: newValues,
      error: newError,
    });
  };
  const renderTaskToDo = () => {};

  const renderTaskComplete = () => {};

  return (
    <div className="card">
      <div className="card__header">
        <img src="./img/X2oObC4.png" alt="background" />
      </div>

      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <div>{renderDate()}</div>
          </div>
          <div className="form-group">
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
                name="taskName"
                onChange={(event) => {
                  handleChangeInput(event);
                }}
              />
              <button id="addItem">
                <i className="fa fa-plus" />
              </button>
            </div>
            <p className="text-danger ms-2">{state.error.taskName}</p>
          </div>

          <div className="card__todo">
            {/* Uncompleted tasks */}

            <ul className="todo" id="todo">
              {/* <li>
                <span>Đi ngủ</span>
                <div className="buttons">
                  <button className="remove" type="button">
                    <i className="fa fa-trash-alt" />
                  </button>
                  <button className="complete" type="button">
                    <i className="fa fa-check-circle" />
                  </button>
                </div>
              </li> */}

              {renderTaskToDo()}
            </ul>

            {/* Completed tasks */}

            <ul className="todo" id="completed">
              {/* <li>
                <span>Ăn sáng</span>
                <div className="buttons">
                  <button className="remove" type="button">
                    <i className="fa fa-trash-alt" />
                  </button>
                  <button className="complete" type="button">
                    <i className="fa fa-undo" />
                  </button>
                </div>
              </li> */}
              {renderTaskComplete()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
