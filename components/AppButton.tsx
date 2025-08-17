import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import colors from "../config/colors";
import { radius, spacingH, spacingX } from "../config/spacing";
import AppText from "./AppText";
import { Icon, IconProps } from "phosphor-react-native";

interface AppButtonProps {
  label?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  icon?: Icon;
  iconProps?: IconProps;
}

const AppButton: React.FC<AppButtonProps> = ({
  label = "",
  onPress,
  style,
  textStyle,
  loading = false,
  icon: Icon,
  iconProps,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, style]}
      onPress={onPress}
    >
      {loading && <ActivityIndicator color={colors.white} />}
      {Icon && <Icon {...iconProps} />}
      <AppText
        size={15}
        style={StyleSheet.flatten([styles.label, textStyle])}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: spacingH.btn,
    borderRadius: radius._35,
    alignSelf: "center",
    flexDirection: "row",
  },
  label: {
    color: colors.white,
    fontWeight: "500",
    marginHorizontal: spacingX._10,
  },
});

export default AppButton;
