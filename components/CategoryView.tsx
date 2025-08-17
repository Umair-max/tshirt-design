import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import AppText from "./AppText";
import colors from "@/config/colors";
import { radius, spacingX, spacingY } from "@/config/spacing";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
  item: string;
}

function CategoryView({ selected, setSelected, item }: Props) {
  const isSelected = selected === item;
  return (
    <Animated.View
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(200)}
      key={`${isSelected}`}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.categoryView,
          {
            backgroundColor: isSelected ? colors.black : colors.white,
          },
        ]}
        onPress={() => setSelected(item)}
      >
        <AppText
          size={13}
          style={{
            color: isSelected ? colors.white : colors.black,
            fontWeight: "500",
          }}
        >
          {item}
        </AppText>
      </TouchableOpacity>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  categoryView: {
    paddingHorizontal: spacingX._15,
    paddingVertical: spacingY._8,
    borderRadius: radius._20,
  },
});

export default CategoryView;
