import { SquareButton } from '../buttons/squareButton';
import './project.scss'

import { type ProjectType } from '../../definitions/types';

type ProjectProps = {
    project: ProjectType,
    onSelect?: (id: string | undefined)=>void,
}

export function ProjectComponent({project, onSelect}: ProjectProps) {
  const handleSelect = (e:any) => {
    if(onSelect && e.target.className.includes("selectable")) {
      onSelect(project.id);
    }
  };
  return (
    <>
        <div className='project selectable' onClick={handleSelect}>
          <div className='selectable'>
            {project.name}
          </div>
          <div className='menu'>
            <SquareButton icon="src/assets/icons/menu.png" onClick={()=>{console.log('test')}}/>
          </div>
        </div>
    </>
  );
}