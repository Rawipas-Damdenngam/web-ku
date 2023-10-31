import { createContext, useState } from "react";
export const DrawerContext = createContext();

export function DrawerProvider(props) {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const handleToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    console.log(isDrawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, handleToggleDrawer }}>
      {props.children}
    </DrawerContext.Provider>
  );
}
