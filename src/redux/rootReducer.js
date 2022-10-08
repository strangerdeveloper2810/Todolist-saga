import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./saga/rootSaga";
import ToDoListReducer from "./reducer/ToDoListReducer"; 


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    ToDoListReducer ,
   
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), 
  
});
sagaMiddleware.run(rootSaga);

export default store;
