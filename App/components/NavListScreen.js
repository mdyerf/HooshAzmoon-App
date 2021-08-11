import React from "react";

import ListItem from "./ListItem";

function NavListScreen({ navigation, items }) {
  return (
    <>
      {items.map((li) => (
        <ListItem
          key={li.navigateTo}
          icon={li.icon}
          text={li.navigateTo}
          onPress={() => navigation.navigate(li.navigateTo)}
        />
      ))}
    </>
  );
}

export default NavListScreen;
