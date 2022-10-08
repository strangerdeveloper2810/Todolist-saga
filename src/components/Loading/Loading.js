import React from "react";
import styleLoading from "./Loading.module.css";
import { useSelector } from "react-redux";

export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src="./img/loading.gif" alt="loading" />
      </div>
    );
  } else {
    return "";
  }
}
