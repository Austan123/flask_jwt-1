import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Dashboard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.user ? (
        <div>
          <h1>Dashboard Page</h1>
        </div>
      ) : (
        <div> You are not loged in </div>
      )}
    </div>
  );
};
