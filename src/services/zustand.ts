import { create } from "zustand";
import { persist } from "zustand/middleware";

type MenuState = {
  toggleSettings: () => void;
  settingsOpen: boolean;
};

export const menuStore = create<MenuState>()(
  persist(
    (set) => ({
      settingsOpen: false,
      toggleSettings: () => set((s) => ({ settingsOpen: !s.settingsOpen })),
    }),
    { name: "settings-storage" }
  )
);

