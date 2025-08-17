import colors from "@/config/colors";
import { radius, width } from "@/config/spacing";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function AllDesignView() {
  return (
    <TouchableOpacity style={styles.designView}>
      <Image
        source={require("@/assets/images/design.png")}
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
    height: "80%",
    width: "80%",
  },
});

export default AllDesignView;
