import { useEffect } from "react";

const useBodyNoScroll = (enabled = true) => {
  useEffect(() => {
    if (enabled) {
      document.body.classList.add("noScroll");
      return () => document.body.classList.remove("noScroll");
    }
  }, [enabled]);
};

export default useBodyNoScroll;
