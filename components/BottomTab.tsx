import colors from "@/config/colors";
import { spacingY } from "@/config/spacing";
import { normalizeY } from "@/utils/normalize";
import { PlusIcon } from "phosphor-react-native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

export type BottomTabType = "templates" | "create" | "history";

interface TabIconProps {
  image: any;
  text: string;
  onPress: () => void;
  isCreate?: boolean;
}

interface Props {
  tab: BottomTabType;
  setTab: (tab: BottomTabType) => void;
}

function BottomTab({ tab, setTab }: Props) {
  const TabIcon = ({ image, text, onPress, isCreate }: TabIconProps) => {
    const isActive = tab === text.toLocaleLowerCase();
    const activeColor = isActive ? colors.primary : colors.grey;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={isCreate ? styles.createIcon : styles.iconView}
        activeOpacity={0.8}
      >
        {isCreate ? (
          <PlusIcon color={colors.white} />
        ) : (
          <>
            <Image
              source={image}
              style={[styles.iconImg, { tintColor: activeColor }]}
            />
            <AppText style={[styles.iconTxt, { color: activeColor }]}>
              {text}
            </AppText>
          </>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TabIcon
        image={require("@/assets/images/home.png")}
        text="Templates"
        onPress={() => setTab("templates")}
      />
      <TabIcon
        image={require("@/assets/images/icon.png")}
        text="Create"
        onPress={() => setTab("create")}
        isCreate
      />

      <TabIcon
        image={require("@/assets/images/history.png")}
        text="History"
        onPress={() => setTab("history")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    height: normalizeY(80),
    paddingHorizontal: "8%",
  },
  iconView: {
    alignItems: "center",
    gap: normalizeY(3),
    padding: spacingY._10,
  },
  createIcon: {
    backgroundColor: colors.black,
    height: normalizeY(60),
    width: normalizeY(60),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalizeY(30),
    borderWidth: normalizeY(4),
    borderColor: colors.white,
    marginTop: -normalizeY(70),
  },
  iconImg: {
    height: normalizeY(22),
    width: normalizeY(22),
  },
  iconTxt: {
    fontWeight: "500",
    fontSize: normalizeY(12),
  },
});

export default BottomTab;
