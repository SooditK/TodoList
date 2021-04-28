import React from "react";
import { CollatedTasks } from "../constants/index";

export const collatedTasksExist = (selectedProject) => {
  CollatedTasks.find((task) => task.key === selectedProject);
};
