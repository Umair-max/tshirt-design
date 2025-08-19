import colors from "@/config/colors";
import { radius, width } from "@/config/spacing";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function MockupDesignView() {
  return (
    <TouchableOpacity
      style={styles.designView}
      onPress={() => router.push("/edit-design")}
    >
      <Image
        source={require("@/assets/images/mockup.png")}
        style={styles.designImg}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  designView: {
    backgroundColor: colors.grey_bg,
    height: width * 0.44,
    width: width * 0.44,
    borderRadius: radius._12,
    justifyContent: "center",
    alignItems: "center",
  },
  designImg: {
    height: "100%",
    width: "100%",
  },
});

export default MockupDesignView;
