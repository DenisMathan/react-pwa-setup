// ProjectService.ts
import { type ProjectType } from "../../definitions/types";

export class ProjectService {
  private key = "projects";

  load(): ProjectType[] {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : [];
  }

  save(projects: ProjectType[]) {
    localStorage.setItem(this.key, JSON.stringify(projects));
  }

  // 🚀 später: hier könnte ein syncWithBackend(projects) dazu kommen
}
