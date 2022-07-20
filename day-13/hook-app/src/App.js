import React from "react";
import Parent from "./Architecture/parent";
import Parent1 from "./childToParent/parent1";
import DropdownMenu from "./dropdownMenu";
import SideEffect from "./sideEffect";

function App() {
  return (
    <>
    <SideEffect/>
    <DropdownMenu/>
    <Parent1/>
    </>
  )
}

export default App;