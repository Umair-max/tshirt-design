import AppText from "@/components/AppText";
import colors from "@/config/colors";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

function index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(app)");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.container}>
      <AppText>Splash Screen</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default index;
