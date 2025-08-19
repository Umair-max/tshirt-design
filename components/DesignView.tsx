import colors from "@/config/colors";
import { radius, width } from "@/config/spacing";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function DesignView() {
  return (
    <TouchableOpacity
      style={styles.designView}
      onPress={() => router.push("/edit-design")}
    >
      <Image
        source={require("@/assets/images/design.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  designView: {
    backgroundColor: colors.grey_bg,
    height: width * 0.33,
    width: width * 0.33,
    borderRadius: radius._12,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});

export default DesignView;
