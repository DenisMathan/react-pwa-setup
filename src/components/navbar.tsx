import { SquareButton } from './buttons/squareButton';
import { menuStore } from '../functions/zustand';
import './navbar.scss'

export function Navbar() {
    const {toggleSettings, settingsOpen} = menuStore(s=>s)
  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <img src="/src/assets/logo-design.png"></img>
            </div>
            <div className='buttonContainer'>
                <SquareButton onClick={()=>toggleSettings()} icon="/src/assets/icons/settings.png" effect='rotating' active={settingsOpen}></SquareButton>
            </div>     
        </div>
    </>
  );
}