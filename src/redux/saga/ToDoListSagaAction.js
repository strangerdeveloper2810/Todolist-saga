/*
07/10/2022
author: Stranger
Viết action Todolist saga
*/

import { takeLatest, call, put } from "redux-saga/effects";
import {
  ADD_TASK_API_SAGA,
  GET_ALL_TASK_API_SAGA,
} from "../constants/ToDoListConstants";
import { STATUS__CODE } from "../../util/constants/settingSystem";
import { ToDoListApiServices } from "../../services/ToDoListServices";

function* getAllTaskApiAction(action) {
  try {
    let { data, status } = yield call(ToDoListApiServices.getAllTaskApi);
    // yield delay(2000);
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
      // console.log(status);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* FollowActionAddTaskApi() {
  yield takeLatest(ADD_TASK_API_SAGA, addTaskApiAction);
}
