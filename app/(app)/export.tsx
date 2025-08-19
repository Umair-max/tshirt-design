import AppButton from "@/components/AppButton";
import AppText from "@/components/AppText";
import QualitySelector, { QualityTabTypes } from "@/components/QualitySelector";
import ScreenComponent from "@/components/ScreenComponent";
import ScreenHeader from "@/components/ScreenHeader";
import colors from "@/config/colors";
import { radius, spacingY, width } from "@/config/spacing";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

function ExportScreen() {
  const [selectedQuality, setSelectedQuality] =
    React.useState<QualityTabTypes>("Low");
  return (
    <ScreenComponent>
      <ScreenHeader heading="Export" screen="export" />
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/design.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: spacingY._20,
          justifyContent: "flex-end",
        }}
      >
        <AppText size={18} style={{ fontWeight: "500" }}>
          Design quality
        </AppText>
        <QualitySelector
          selected={selectedQuality}
          setSelected={setSelectedQuality}
        />
        <AppButton label="Export" style={{ backgroundColor: colors.button }} />
      </View>
    </ScreenComponent>
  );
}

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
    marginTop: spacingY._10,
  },
});

export default ExportScreen;
