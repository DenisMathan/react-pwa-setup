import { useState } from 'react';
import './button.scss'

type SquareButtonProps = {
  onClick?: ()=> void;
  icon?: string;
  effect?: 'rotating';
  active?: boolean;
}

export function SquareButton( {onClick, icon, effect, active}: SquareButtonProps) {
  return (
    <div className='squareButton'>
      <button onClick={onClick}>
      {icon ? <img className={effect + ' ' +(active ? 'active' : '')} src={icon}></img> : 's'}
      </button>
    </div>
  );
}