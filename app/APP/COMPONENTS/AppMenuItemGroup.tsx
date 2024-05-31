import React from "react";
import AppMenuItem from "./AppMenuItem";
import { MenuItemList } from "./CONSTANTS/MenuItemList";

function AppMenuItemGroup() {
  return (
    <>
      {MenuItemList.map((item) => (
        <AppMenuItem link={item.link} icon={item.icon} text={item.title} key={item.id} />
      ))}
    </>
  );
}

export default AppMenuItemGroup;
