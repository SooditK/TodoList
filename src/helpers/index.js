import React from "react";
import collatedTasksExist from "../constants/index";

export const useCollatedTasksExist = (selectedProject) => {
  collatedTasksExist.find((task) => task.key === selectedProject);
};
