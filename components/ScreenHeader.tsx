import { radius, spacingX, spacingY } from "@/config/spacing";
import { normalizeX, normalizeY } from "@/utils/normalize";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import colors from "@/config/colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  ArrowSquareOutIcon,
  CaretLeftIcon,
  ShareNetworkIcon,
  StarIcon,
} from "phosphor-react-native";
import AppIcon from "./AppIcon";

export type ScreenTypes = "home" | "edit-design" | "export";

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
          style={[
            styles.touchable,
            { width: screen == "export" ? normalizeX(80) : normalizeX(60) },
          ]}
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
      {isBack && !screen && <View style={{ width: normalizeX(60) }} />}
      {screen == "edit-design" && (
        <TouchableOpacity
          style={[styles.touchable, styles.export]}
          onPress={() => router.push("/export")}
        >
          <AppText size={14} style={styles.exportTxt}>
            Export
          </AppText>
          <ArrowSquareOutIcon color={colors.white} size={normalizeY(20)} />
        </TouchableOpacity>
      )}
      {screen == "export" && (
        <View style={{ flexDirection: "row", gap: spacingX._10 }}>
          <AppIcon
            icon={ShareNetworkIcon}
            size={normalizeX(35)}
            containerStyle={styles.icon}
            iconProps={{ size: normalizeX(20) }}
          />
          <AppIcon
            icon={StarIcon}
            size={normalizeX(35)}
            containerStyle={styles.icon}
            iconProps={{ size: normalizeX(20) }}
          />
        </View>
      )}
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
  export: {
    backgroundColor: colors.button,
    padding: spacingY._5,
    paddingHorizontal: spacingX._10,
    width: "auto",
    borderRadius: radius._20,
    gap: spacingX._5,
  },
  exportTxt: {
    color: colors.white,
    marginTop: normalizeY(1),
    fontWeight: "500",
  },
  icon: {
    borderRadius: radius._8,
    backgroundColor: colors.grey_bg,
  },
});

export default ScreenHeader;
