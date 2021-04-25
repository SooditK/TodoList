import React from "react";

export const collatedTasksExist = (selectedProject) => {
  collatedTasksExist.find((task) => task.key === selectedProject);
};
