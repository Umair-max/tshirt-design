import React, { ReactNode } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../config/colors";
import { spacingY } from "../config/spacing";

interface ScreenComponentProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const ScreenComponent: React.FC<ScreenComponentProps> = ({
  style,
  children,
}) => {
  const insets = useSafeAreaInsets();
  const paddingTop =
    Platform.OS === "ios" ? insets.top : insets.top + spacingY._10;

  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.white,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenComponent;
