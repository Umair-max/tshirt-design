import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import AppText from "./AppText";
import { spacingX, spacingY } from "@/config/spacing";
import { normalizeY } from "@/utils/normalize";
import colors from "@/config/colors";

export type TemplateTabTypes = "Designs" | "Mockups";

interface TabProps {
  text: string;
  onPress: () => void;
  tab: string;
}

interface TemplatesTabProps {
  tab: TemplateTabTypes;
  setTab: (tab: TemplateTabTypes) => void;
}

function TemplatesTab({ tab, setTab }: TemplatesTabProps) {
  return (
    <View style={styles.tabsRow}>
      <Tab text="Designs" onPress={() => setTab("Designs")} tab={tab} />
      <Tab text="Mockups" onPress={() => setTab("Mockups")} tab={tab} />
    </View>
  );
}

const Tab = ({ text, onPress, tab }: TabProps) => {
  const textColor = tab === text ? colors.white : colors.black;
  const tabColor = tab === text ? colors.black : colors.white;
  return (
    <Animated.View
      style={[styles.tab, { backgroundColor: tabColor }]}
      entering={FadeIn.duration(600)}
      exiting={FadeOut.duration(300)}
      key={tab}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.touchable}
      >
        <AppText size={15} style={{ color: textColor, fontWeight: "500" }}>
          {text}
        </AppText>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabsRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.6)",
    marginHorizontal: spacingX._20,
    borderRadius: normalizeY(30),
    height: normalizeY(55),
    padding: spacingY._7,
    marginBottom: spacingY._15,
  },
  tab: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: normalizeY(30),
  },
  touchable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TemplatesTab;
