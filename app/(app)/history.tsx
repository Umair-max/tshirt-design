import AllDesignView from "@/components/AllDesignView";
import ScreenComponent from "@/components/ScreenComponent";
import ScreenHeader from "@/components/ScreenHeader";
import { spacingX, spacingY } from "@/config/spacing";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

function History() {
  return (
    <ScreenComponent>
      <ScreenHeader heading="History" isBack={false} />
      {/* <EmptyView /> */}
      <FlatList
        data={Array.from({ length: 3 })}
        numColumns={2}
        contentContainerStyle={styles.designList}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <AllDesignView />;
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  designList: {
    paddingHorizontal: spacingX._15,
    gap: spacingY._15,
    paddingBottom: spacingY._30,
  },
});

export default History;
