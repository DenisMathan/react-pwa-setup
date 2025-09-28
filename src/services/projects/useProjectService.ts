// useProjectStore.ts
import { create } from "zustand";
import { type ProjectType } from "../../definitions/types";
import { ProjectService } from "./projectService";

const service = new ProjectService();

type ProjectState = {
  projects: ProjectType[];
  add: (project: ProjectType) => void;
  remove: (id: string) => void;
};

export const useProjectStore = create<ProjectState>((set) => ({
  projects: service.load(),

  add: (project) => {
    set((state) => {
      const newProjects = [...state.projects, project];
      service.save(newProjects); // Persistenz
      return { projects: newProjects };
    });
  },

  remove: (id) => {
    set((state) => {
      const newProjects = state.projects.filter((p) => p.id !== id);
      service.save(newProjects); // Persistenz
      return { projects: newProjects };
    });
  },
}));