import { useParams } from "react-router-dom";
import { useProjectStore } from "../../services/projects/useProjectService";

export function ProjectView() {
  const { id } = useParams<{ id: string }>();
  const project = useProjectStore((s) =>
    s.projects.find((p) => p.id === id)
  );

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>ID: {project.id}</p>
      {/* hier später mehr Details */}
    </div>
  );
}