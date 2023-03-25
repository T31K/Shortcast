import { appWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";

const useGlobal = () => {
  const handleGlobal = async (e: KeyboardEvent) => {
    if (e.code !== 'Escape') {
      appWindow.setFocus()
    } else {
      e.preventDefault();
      invoke("hide_spotlight");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleGlobal);
    return () => window.removeEventListener("keydown", handleGlobal);
  }, []);
};

export default useGlobal;
