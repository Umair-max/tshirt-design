import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import { normalizeY } from "../utils/normalize";
import { radius, spacingX, spacingY } from "../config/spacing";
import AppText from "./AppText";
import AppIcon from "./AppIcon";
import { Image } from "expo-image";

const { width } = Dimensions.get("screen");
const containerWidth = width - spacingX._30;

export type QualityTabTypes = "Low" | "High";

interface Props {
  selected: QualityTabTypes;
  setSelected: (value: QualityTabTypes) => void;
}

function QualitySelector({ selected, setSelected }: Props) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const getPosition = (text: QualityTabTypes) => {
    return text === "Low" ? 0 : containerWidth * 0.5;
  };

  useEffect(() => {
    const newPosition = getPosition(selected);
    Animated.spring(animatedValue, {
      toValue: newPosition,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  return (
    <View>
      <View style={styles.premiumView}>
        <Image
          source={require("@/assets/images/premium.png")}
          style={styles.premiumImg}
        />
      </View>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.selectedView,
            {
              transform: [{ translateX: animatedValue }],
            },
          ]}
        />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setSelected("Low")}
        >
          <AppText
            size={16}
            style={{
              fontWeight: "500",
              color: selected == "Low" ? colors.white : colors.black,
            }}
          >
            Low
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setSelected("High")}
        >
          <AppText
            size={16}
            style={{
              fontWeight: "500",
              color: selected == "High" ? colors.white : colors.black,
            }}
          >
            High
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: spacingY._20,
    overflow: "hidden",
    marginTop: spacingY._10,
    height: normalizeY(45),
    width: containerWidth,
    alignSelf: "center",
    borderRadius: radius._30,
    backgroundColor: colors.grey_bg,
  },
  selectedView: {
    backgroundColor: colors.primary,
    position: "absolute",
    borderRadius: radius._30,
    height: normalizeY(45),
    width: containerWidth / 2,
    zIndex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    zIndex: 1,
  },
  premiumView: {
    backgroundColor: colors.premium,
    height: normalizeY(20),
    width: normalizeY(20),
    borderRadius: radius._10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: spacingX._5,
    zIndex: 2,
  },
  premiumImg: {
    width: "60%",
    height: "60%",
  },
});

export default QualitySelector;
