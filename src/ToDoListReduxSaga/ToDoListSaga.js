import React, { useEffect, useState } from "react";
import "./ToDoListSaga.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_TASK_API_SAGA,
  GET_ALL_TASK_API_SAGA,
} from "../redux/constants/ToDoListConstants";
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

  const dispatch = useDispatch();

  const { taskList } = useSelector((state) => state.ToDoListReducer);

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

  const renderTaskToDo = () => {
    return taskList
      .filter((task) => !task.status)
      .map((task, index) => (
        <li key={index}>
          <span>{task.taskName}</span>
          <div className="buttons">
            <button className="remove" type="button">
              <i className="fa fa-trash-alt" />
            </button>
            <button type="button" className="complete">
              <i className="far fa-check-circle" />
            </button>
          </div>
        </li>
      ));
  };

  const renderTaskComplete = () => {
    return taskList
      .filter((task) => task.status)
      .map((task, index) => {
        return (
          <li key={index}>
            <span>{task.taskName}</span>
            <div className="buttons">
              <button className="remove" type="button">
                <i className="fa fa-trash-alt" />
              </button>
              <button type="button" className="complete">
                <i className="fa fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };

  const handleGetAllTask = () => {
    // dispatch lên saga
    dispatch({
      type: GET_ALL_TASK_API_SAGA,
    });
  };

  useEffect(() => {
    handleGetAllTask();
  }, []);

  const handleAddTask = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TASK_API_SAGA,
      taskName: state.values.taskName,
    });
  };

  const handleDeleteTask = (taskName) => {};

  const handleDoneTask = (taskName) => {};

  const handleRejectTask = (taskName) => {};

  return (
    <div className="card">
      <div className="card__header">
        <img src="./img/X2oObC4.png" alt="background" />
      </div>

      <form
        className="card__body"
        onSubmit={(event) => {
          handleAddTask(event);
        }}
      >
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
              <button
                id="addItem"
                type="button"
                onClick={(event) => {
                  handleAddTask(event);
                }}
              >
                <i className="fa fa-plus" />
              </button>
            </div>
            <p className="text-danger ms-2">{state.error.taskName}</p>
          </div>

          <div className="card__todo">
            {/* Uncompleted tasks */}

            <ul className="todo" id="todo">
              {renderTaskToDo()}
            </ul>

            {/* Completed tasks */}

            <ul className="todo" id="completed">
              {renderTaskComplete()}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
