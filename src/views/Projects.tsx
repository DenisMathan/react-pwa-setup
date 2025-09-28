import { useState} from 'react';
import './projects.scss'
import { ProjectComponent } from '../components/project/project';
import { type ProjectType } from '../definitions/types';
import { SquareButton } from '../components/buttons/squareButton';
import { useProjectStore } from '../services/projects/useProjectService';
type ProjectsType = Array<ProjectType>

export function ProjectsView() {
  useState
  const select = (id:string | undefined)=> {
    window.location.href = `/project/${id}`;
  };
  const add = useProjectStore((s) => s.add);
  const Projects = useProjectStore((s) => s.projects);
  const addProject = () => {
    const name = prompt("Projectname?");
    if (!name) {
      return;
    }

    const newProject: ProjectType = {
      id: '' + Date.now(),
      name: name,
      created: Date.now(),
      updated: Date.now(),
      // add other required fields with default values if needed
    };
    add(newProject);
  }
  return (
    <>
        <div className='projects'>
          {
            Projects.sort((a,b)=>(b.updated - a.updated)).map((project, index) => (
              <ProjectComponent project={project} onSelect={select} key={'project-'+index}/>
            ))
          }
        </div>
        <div className='addButton'>
          <SquareButton icon='src/assets/icons/plus.png' onClick={addProject}></SquareButton>
        </div>
    </>
  );
}