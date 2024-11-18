import { useEffect, useState } from "react";

const useDark = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    let localDark = localStorage.getItem("dark");
    if (localDark === null) {
      localDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      localDark = JSON.parse(localDark);
    }

    setDark(localDark);
    if (localDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return { dark, setDark };
};

export default useDark;
