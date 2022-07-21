//using Context and attaining the same functionality as usingProps.js. 

import { useState, useContext, createContext} from 'react';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };
  
  const ThemeContext = createContext(themes.light);
  
  function WithContext() {
    const [themeName, setThemeName] = useState("light");
    const currentTheme = themes[themeName];
    return (
      <>
        <select
          onChange={(event) => setThemeName(event.target.value)}
          value={themeName}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <ThemeContext.Provider value={currentTheme}>
          <Toolbar />
        </ThemeContext.Provider>
      </>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const { background, foreground } = useContext(ThemeContext);
    return (
      <button
        style={{
          backgroundColor: background,
          color: foreground,
        }}
      >
        Click Me
      </button>
    );
  }
   export default WithContext;