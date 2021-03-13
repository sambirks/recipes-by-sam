import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
useEffect(() => {
    setIsMounted(true);
  }, []);
const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  
  if (theme === "light") {
    return (
      <span className="px-3 py-2 flex items-center text-sm uppercase font-bold hover:opacity-75" onClick={switchTheme}>
       Dark
      
    </span>
    )
  } else {
    return (
    <span className="px-3 py-2 flex items-center text-sm uppercase font-bold hover:opacity-75" onClick={switchTheme}>
        Light  
    </span>
    )
  }
}

export default ThemeToggle
