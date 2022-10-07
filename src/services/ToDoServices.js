import axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";

export class ToDoListServices {
  constructor() {}

  getAllTaskApi = () => {
    return axios({
      url: `${DOMAIN}/GetAllTask`,
      method: "GET",
    });
  };

  addTaskApi = () => {
    return axios({
      url: `${DOMAIN}/AddTask`,
      method: "POST",
    });
  };

  deleteTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
  };

  doneTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/doneTask=${taskName}`,
      method: "PUT",
    });
  };

  rejectTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/rejectTask=${taskName}`,
      method: "PUT",
    });
  };
}

export const TDLServices = new ToDoListServices();
