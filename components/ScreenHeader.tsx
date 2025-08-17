import { radius, spacingX, spacingY } from "@/config/spacing";
import { normalizeX, normalizeY } from "@/utils/normalize";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import colors from "@/config/colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { CaretLeftIcon } from "phosphor-react-native";

export type ScreenTypes = "home";

type ScreenHeaderProps = {
  heading?: string;
  screen?: ScreenTypes;
  isBack?: boolean;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  heading = "Screen Title",
  isBack = true,
  screen,
}) => {
  if (screen === "home") {
    return (
      <View style={styles.homeRow}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("@/assets/images/menu.png")}
            style={styles.iconImg}
          />
        </View>
        <View style={{ flex: 1 }}>
          <AppText size={17} style={{ fontWeight: "500" }}>
            T Shirt Design
          </AppText>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={styles.premiumBadge}>
            <AppText style={styles.premiumText}>Pro</AppText>
            <Image
              source={require("@/assets/images/premium.png")}
              style={styles.iconImg}
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.row, !isBack && { justifyContent: "center" }]}>
      {isBack && (
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.touchable}
        >
          <CaretLeftIcon weight="bold" />
          <AppText size={13} style={{ fontWeight: "500" }}>
            Back
          </AppText>
        </TouchableOpacity>
      )}
      <AppText size={18} style={{ fontWeight: "500" }}>
        {heading}
      </AppText>
      {isBack && <View style={{ width: normalizeX(60) }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacingX._12,
    marginBottom: spacingY._12,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    width: normalizeX(60),
  },
  homeRow: {
    flexDirection: "row",
    marginHorizontal: spacingX._20,
    paddingBottom: spacingY._15,
    alignItems: "center",
  },
  iconImg: {
    height: normalizeY(19),
    width: normalizeY(19),
  },
  premiumBadge: {
    backgroundColor: colors.premium,
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._10,
    borderRadius: radius._20,
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._7,
  },
  premiumText: {
    color: colors.white,
    fontWeight: "600",
  },
});

export default ScreenHeader;
