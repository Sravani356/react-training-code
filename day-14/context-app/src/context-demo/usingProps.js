//passing props inside a function without using context

import { useState } from 'react';

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

function UsingProps() {
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

      <Toolbar theme={currentTheme} />
    </>
  );
}

function Toolbar({ theme }) {
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
}

function ThemedButton({ theme }) {
  const { background, foreground } = theme;
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
 
export default UsingProps;