import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import colors from "../config/colors";
import { normalizeY } from "../utils/normalize";

interface AppTextProps extends TextProps {
  size?: number;
  style?: TextStyle | TextStyle[];
}

const AppText: React.FC<AppTextProps> = ({
  size,
  style,
  children,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.default,
        {
          fontSize: size ? normalizeY(size) : normalizeY(14),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: colors.black,
  },
});

export default AppText;
