
import { create } from "zustand";

type ThemeState = {
  dark: boolean;
  toggle: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  toggle: () =>
    set((state) => {
      const newTheme = !state.dark;

      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { dark: newTheme };
    }),
}));