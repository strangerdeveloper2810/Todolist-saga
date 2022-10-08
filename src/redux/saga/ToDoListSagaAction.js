import { takeLatest, call, put } from "redux-saga/effects";
import {
  ADD_TASK_API_SAGA,
  GET_ALL_TASK_API_SAGA,
  DELETE_TASK_API_SAGA,
  CHECK_TASK_API_SAGA,
  REJECT_TASK_API_SAGA,
} from "../constants/ToDoListConstants";
import { STATUS__CODE } from "../../util/constants/settingSystem";
import { ToDoListApiServices } from "../../services/ToDoListServices";
import Swal from "sweetalert2";

function* getAllTaskApiAction(action) {
  try {
    let { data, status } = yield call(ToDoListApiServices.getAllTaskApi);
    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: "ToDoListReducer/getAllTaskListAction",
        taskList: data,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* FollowActionGetAllTaskApi() {
  yield takeLatest(GET_ALL_TASK_API_SAGA, getAllTaskApiAction);
}

function* addTaskApiAction(action) {
  try {
    let { status } = yield call(() =>
      ToDoListApiServices.addTaskApi(action.taskName)
    );

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_ALL_TASK_API_SAGA,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Add Task Success!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  }
}

export function* FollowActionAddTaskApi() {
  yield takeLatest(ADD_TASK_API_SAGA, addTaskApiAction);
}

function* deleteTaskApiAction(action) {
  const { taskName } = action;
  try {
    const { status } = yield call(() => {
      return ToDoListApiServices.deleteTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_ALL_TASK_API_SAGA,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Delete Task Success!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  }
}

export function* FollowActionDeleteTaskApi() {
  yield takeLatest(DELETE_TASK_API_SAGA, deleteTaskApiAction);
}

function* checkTaskApiAction(action) {
  const { taskName } = action;
  try {
    const { status } = yield call(() => {
      return ToDoListApiServices.doneTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_ALL_TASK_API_SAGA,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Check Task Success!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  }
}

export function* FollowActionCheckTaskApi() {
  yield takeLatest(CHECK_TASK_API_SAGA, checkTaskApiAction);
}

function* rejectTaskApiAction(action) {
  const { taskName } = action;
  try {
    const { status } = yield call(() => {
      return ToDoListApiServices.rejectTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_ALL_TASK_API_SAGA,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Reject Task Success!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error}`,
    });
  }
}

export function* FollowActionRejectTaskApi() {
  yield takeLatest(REJECT_TASK_API_SAGA, rejectTaskApiAction);
}
