import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import { spacingX, spacingY } from "@/config/spacing";
import { CaretCircleRightIcon } from "phosphor-react-native";

interface Props {
  title: string;
  onPress: () => void;
}

function SeeAllView({ title, onPress }: Props) {
  return (
    <View style={styles.container}>
      <AppText size={17} style={{ fontWeight: "500" }}>
        {title}
      </AppText>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <AppText size={11} style={{ fontWeight: "500" }}>
          See All
        </AppText>
        <CaretCircleRightIcon weight="fill" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacingX._15,
    marginBottom: spacingY._10,
    marginTop: spacingY._15,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._5,
  },
});

export default SeeAllView;
