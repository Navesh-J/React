import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(() => {
    const html=document.querySelector('html');
    html.classList.remove("light","dark");
    html.classList.add(themeMode);
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center ">
        <div className="w-1/4 ">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"></div>
          <Card/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
