import BottomTab, { BottomTabType } from "@/components/BottomTab";
import React, { useState } from "react";
import { View } from "react-native";
import Create from "./create";
import History from "./history";
import Templates from "./templates";

function index() {
  const [tab, setTab] = useState<BottomTabType>("templates");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {tab == "templates" ? (
          <Templates />
        ) : tab == "create" ? (
          <Create />
        ) : (
          <History />
        )}
      </View>
      <BottomTab tab={tab} setTab={setTab} />
    </View>
  );
}

export default index;
