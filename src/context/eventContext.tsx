import { createContext, useContext, useState, type ReactNode } from "react";

type EventContextType = {
  settings: boolean;
  toggleSettings: () => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function useEventContext() {
  const ctx = useContext(EventContext);
  if (!ctx) throw new Error("useEventContext must be used within EventProvider");
  return ctx;
}

export function EventProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    console.log(settings)
    if(settings) {
        setSettings(false);
    } else {
        setSettings (true);
    }
  };

  return (
    <EventContext.Provider value={{ settings, toggleSettings }}>
      {children}
    </EventContext.Provider>
  );
}