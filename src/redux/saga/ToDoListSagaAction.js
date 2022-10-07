/*
07/10/2022
author: Stranger
Viết action Todolist saga
*/

import { takeLatest, call, put } from "redux-saga/effects";
import { GET_ALL_TASK_API_SAGA } from "../constants/ToDoListConstants";
import { STATUS__CODE } from "../../util/constants/settingSystem";
import { ToDoListApiServices } from "../../services/ToDoListServices";

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
