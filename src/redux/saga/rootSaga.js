import {all} from "redux-saga/effects";
import * as TDLSagaAction from "./ToDoListSagaAction"

export function * rootSaga() {
    yield all([
        TDLSagaAction.FollowActionGetAllTaskApi(),
        TDLSagaAction.FollowActionAddTaskApi(),
        TDLSagaAction.FollowActionDeleteTaskApi(),
        TDLSagaAction.FollowActionCheckTaskApi(),
        TDLSagaAction.FollowActionRejectTaskApi(),
    ]);
}