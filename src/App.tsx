import { useEffect, useState } from "react";
import UserComponent from "./components/UserComponent";
import ItemComponent from "./components/ItemComponent";
import ThemeContext from "./context/ThemeContext";
import ThemeComponent from "./components/ThemeComponent";
import ParentComponent from "./components/ParentComponent";
import CounterComponent from "./components/CounterComponent";

function App() {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<string>("light");


  useEffect(() => {
    console.log("Count: " + count);
  }, [count])

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }

    /* switch statement
    switch(theme) {
      case "light":
        setTheme("dark")
        break;
      case "dark":
        setTheme("light")
        break;
      default: 
        break;
    } */
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserComponent />
      <ItemComponent />
      <ThemeComponent />
      <ParentComponent />
      <CounterComponent
        count={count}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </ThemeContext.Provider>
  );
}

export default App;
