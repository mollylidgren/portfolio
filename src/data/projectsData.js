import { projects_en } from "./projects_en";
import { projects_sv } from "./projects_sv";

export const getProjects = (language) => {
  return language === "sv" ? projects_sv : projects_en;
};
