import AppText from "@/components/AppText";
import ScreenComponent from "@/components/ScreenComponent";
import ScreenHeader from "@/components/ScreenHeader";
import colors from "@/config/colors";
import { radius, spacingY, width } from "@/config/spacing";
import { normalizeY } from "@/utils/normalize";
import { Image, ImageSource } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type OptionTypes = "Mockups" | "Add Text" | "Opacity" | "Nudge";

interface OptionProps {
  image: ImageSource;
  text: OptionTypes;
  selected: OptionTypes | "";
  onPress: (value: OptionTypes) => void;
}

function EditDesign() {
  const [selectedOption, setSelectedOption] = useState<OptionTypes | "">("");
  return (
    <ScreenComponent>
      <ScreenHeader heading="" screen="edit-design" />
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/design.png")}
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.optionsRow}>
        <Option
          image={require("@/assets/images/mockups.png")}
          text="Mockups"
          selected={selectedOption}
          onPress={setSelectedOption}
        />
        <Option
          image={require("@/assets/images/add-text.png")}
          text="Add Text"
          selected={selectedOption}
          onPress={setSelectedOption}
        />
        <Option
          image={require("@/assets/images/opacity.png")}
          text="Opacity"
          selected={selectedOption}
          onPress={setSelectedOption}
        />
        <Option
          image={require("@/assets/images/nudge.png")}
          text="Nudge"
          selected={selectedOption}
          onPress={setSelectedOption}
        />
      </View>
    </ScreenComponent>
  );
}

const Option = ({ image, text, selected, onPress }: OptionProps) => {
  const isSelected = selected === text;
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => onPress(text)}
        style={[
          styles.iconView,
          isSelected && { backgroundColor: colors.primary },
        ]}
      >
        <Image
          source={image}
          style={{ height: normalizeY(25), width: normalizeY(25) }}
        />
      </TouchableOpacity>
      <AppText size={13} style={{ fontWeight: "500", color: colors.button }}>
        {text}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  imageContainer: {
    height: width,
    width: width,
    backgroundColor: colors.grey_bg,
    borderRadius: radius._15,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: normalizeY(20),
    paddingVertical: normalizeY(10),
    marginBottom: spacingY._20,
  },
  iconView: {
    backgroundColor: colors.button,
    alignItems: "center",
    justifyContent: "center",
    height: normalizeY(50),
    width: normalizeY(50),
    borderRadius: radius._12,
    marginBottom: spacingY._7,
  },
});

export default EditDesign;
