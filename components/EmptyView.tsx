import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";
import { PlusIcon } from "phosphor-react-native";
import colors from "@/config/colors";
import { normalizeY } from "@/utils/normalize";
import { spacingY } from "@/config/spacing";

function EmptyView() {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={require("@/assets/images/empty.png")}
        style={styles.emptyImg}
      />
      <AppText size={16} style={styles.title}>
        Your history is empty.
      </AppText>
      <AppText size={15} style={styles.body}>
        Design your first T-shirt to fill it.
      </AppText>
      <AppButton
        label="Create design"
        style={{ width: "80%" }}
        icon={PlusIcon}
        iconProps={{
          weight: "bold",
          color: colors.white,
          size: normalizeY(18),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20%",
  },
  emptyImg: {
    width: normalizeY(200),
    height: normalizeY(200),
    marginBottom: spacingY._10,
  },
  title: {
    fontWeight: "600",
    marginBottom: spacingY._5,
  },
  body: {
    color: colors.lightTxt,
    marginBottom: spacingY._15,
  },
});

export default EmptyView;
