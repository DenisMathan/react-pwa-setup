import { type ReactNode} from 'react';
import './content.scss'
import { SwipeListener } from '../functions/swipe';
import { useEffect, useRef } from 'react';
import { SettingsView } from '../views/settings/SettingsView';
import { menuStore } from '../functions/zustand';

type ContentProps = {
  children: ReactNode;
};
export function Content({children}: ContentProps) {
  const onSwipe = (direction: string) => {
    console.log(direction)
    switch (direction) {
      case "swipeLeft":
        if(!window.location.href.includes("settings")) {
          window.location.href = "/settings";
        }
        break;
      case "swipeRight":
        if(!window.location.href.includes("home")) {
          window.location.href = "/home";
        }
        break;
    }
  }
  const contentRef = useRef<HTMLDivElement>(null);
  const settingsOpen = menuStore(s=>s.settingsOpen);
  useEffect(() => {
    if (contentRef.current) {
      const swipeListener = new SwipeListener(contentRef.current, onSwipe);
      return () => {
        swipeListener.destroy && swipeListener.destroy();
      };
    }
  }, []);
  return (
    <>
      <div className="content" ref={contentRef}>
        <div className={'settingsContainer ' + (settingsOpen ? 'active' : '')}>
            <SettingsView></SettingsView>
        </div>
      {children}
      </div>
    </>
  );
}