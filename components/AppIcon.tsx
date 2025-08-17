import { normalizeY } from "@/utils/normalize";
import { IconProps } from "phosphor-react-native";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import colors from "../config/colors";
import { radius } from "../config/spacing";

interface AppIconProps {
  icon: React.FC<IconProps>;
  iconStyle?: StyleProp<ViewStyle>;
  containerStyle?: ViewStyle;
  iconProps?: IconProps;
  onPress?: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({
  icon: Icon,
  iconStyle = {},
  containerStyle,
  iconProps,
  onPress,
}) => {
  const size = normalizeY(42);

  return (
    <TouchableOpacity
      style={[styles.icon, { height: size, width: size }, containerStyle]}
      onPress={onPress}
    >
      <Icon {...iconProps} style={iconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: radius._25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
});

export default AppIcon;
