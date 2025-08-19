import AppText from "@/components/AppText";
import CategoryView from "@/components/CategoryView";
import DesignView from "@/components/DesignView";
import MockupDesignView from "@/components/MockupDesignView";
import ScreenComponent from "@/components/ScreenComponent";
import ScreenHeader from "@/components/ScreenHeader";
import SeeAllView from "@/components/SeeAllView";
import TemplatesTab, { TemplateTabTypes } from "@/components/TemplatesTab";
import colors from "@/config/colors";
import { radius, spacingX, spacingY } from "@/config/spacing";
import { normalizeX, normalizeY } from "@/utils/normalize";
import { Image, ImageBackground } from "expo-image";
import { router } from "expo-router";
import React, { useState, useRef } from "react";
import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type DesignTypes = "T Shirt" | "SVG" | "Monograms";
const categories = ["Vintage", "Christmas", "Summer", "Winter"];
const mockup_categories = ["T-Shirt", "Hat", "Hoodie", "Mug", "Bag"];

interface DesignTypesTabProps {
  text: DesignTypes;
  image: ImageSourcePropType;
  onPress: (value: DesignTypes) => void;
  selected: DesignTypes;
}

function Templates() {
  const [tab, setTab] = useState<TemplateTabTypes>("Designs");
  const [selectedType, setSelectedType] = useState<DesignTypes>("T Shirt");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const [selectedMockup, setSelectedMockup] = useState<string>(
    mockup_categories[0]
  );

  const scrollViewRef = useRef<ScrollView>(null);
  const categoryRefs = useRef<{ [key: string]: number }>({});

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const categoryPosition = categoryRefs.current[category];
    if (categoryPosition !== undefined && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: categoryPosition,
        animated: true,
      });
    }
  };

  const handleSeeAll = (category: string) => {
    router.push({ pathname: "/all-designs", params: { category } });
  };
  return (
    <ImageBackground
      source={require("@/assets/images/templatesBG.png")}
      style={{ flex: 1 }}
    >
      <ScreenComponent style={{ backgroundColor: colors.transparent }}>
        <ScreenHeader screen="home" />
        <TemplatesTab tab={tab} setTab={setTab} />
        {tab == "Designs" ? (
          <>
            <View style={styles.designTypesContainer}>
              <DesignTypesTab
                text="T Shirt"
                image={require("@/assets/images/tshirt.png")}
                onPress={setSelectedType}
                selected={selectedType}
              />
              <DesignTypesTab
                text="SVG"
                image={require("@/assets/images/svg.png")}
                onPress={setSelectedType}
                selected={selectedType}
              />
              <DesignTypesTab
                text="Monograms"
                image={require("@/assets/images/monograms.png")}
                onPress={setSelectedType}
                selected={selectedType}
              />
            </View>
            <FlatList
              data={categories}
              horizontal
              style={{ marginBottom: spacingY._10, height: normalizeY(60) }}
              contentContainerStyle={styles.categoryList}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <CategoryView
                    item={item}
                    selected={selectedCategory}
                    setSelected={handleCategorySelect}
                  />
                );
              }}
            />
            <ScrollView
              ref={scrollViewRef}
              contentContainerStyle={{ paddingBottom: spacingY._30 }}
            >
              <View style={{ marginTop: -spacingY._15 }} />
              <View
                onLayout={(event) => {
                  const { y } = event.nativeEvent.layout;
                  categoryRefs.current[categories[0]] = y;
                }}
              >
                <SeeAllView
                  title={categories[0]}
                  onPress={() => handleSeeAll(categories[0])}
                />
                <FlatList
                  data={Array.from({ length: 5 })}
                  horizontal
                  contentContainerStyle={styles.designList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => {
                    return <DesignView />;
                  }}
                />
              </View>
              <View
                onLayout={(event) => {
                  const { y } = event.nativeEvent.layout;
                  categoryRefs.current[categories[1]] = y;
                }}
              >
                <SeeAllView
                  title={categories[1]}
                  onPress={() => handleSeeAll(categories[1])}
                />
                <FlatList
                  data={Array.from({ length: 5 })}
                  horizontal
                  contentContainerStyle={styles.designList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => {
                    return <DesignView />;
                  }}
                />
              </View>
              <View
                onLayout={(event) => {
                  const { y } = event.nativeEvent.layout;
                  categoryRefs.current[categories[2]] = y;
                }}
              >
                <SeeAllView
                  title={categories[2]}
                  onPress={() => handleSeeAll(categories[2])}
                />
                <FlatList
                  data={Array.from({ length: 5 })}
                  horizontal
                  contentContainerStyle={styles.designList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => {
                    return <DesignView />;
                  }}
                />
              </View>
              <View
                onLayout={(event) => {
                  const { y } = event.nativeEvent.layout;
                  categoryRefs.current[categories[3]] = y;
                }}
              >
                <SeeAllView
                  title={categories[3]}
                  onPress={() => handleSeeAll(categories[3])}
                />
                <FlatList
                  data={Array.from({ length: 5 })}
                  horizontal
                  contentContainerStyle={styles.designList}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => {
                    return <DesignView />;
                  }}
                />
              </View>
            </ScrollView>
          </>
        ) : (
          <View>
            <FlatList
              data={mockup_categories}
              horizontal
              style={{ height: normalizeY(50) }}
              contentContainerStyle={styles.categoryList}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <CategoryView
                    item={item}
                    selected={selectedMockup}
                    setSelected={setSelectedMockup}
                  />
                );
              }}
            />
            <FlatList
              data={Array.from({ length: 10 })}
              numColumns={2}
              contentContainerStyle={[
                styles.designList,
                { paddingBottom: "55%" },
              ]}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return <MockupDesignView />;
              }}
            />
          </View>
        )}
      </ScreenComponent>
    </ImageBackground>
  );
}

const DesignTypesTab = ({
  text,
  image,
  onPress,
  selected,
}: DesignTypesTabProps) => {
  const isSelected = selected === text;
  return (
    <TouchableOpacity
      onPress={() => onPress(text)}
      style={[
        styles.designTypesTab,
        {
          borderColor: isSelected ? colors.primary : colors.transparent,
          backgroundColor: isSelected ? colors.light : colors.transparent,
        },
      ]}
    >
      <View style={styles.designTypesView}>
        <AppText size={12} style={styles.designTypesTxt}>
          {text}
        </AppText>
        <Image source={image} style={styles.desigTypesImg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  designTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacingX._15,
    height: normalizeY(100),
    marginBottom: spacingY._20,
  },
  designTypesTab: {
    borderWidth: 1,
    borderRadius: radius._12,
    padding: spacingY._8,
    width: "31%",
  },
  designTypesView: {
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    borderRadius: normalizeY(8),
    overflow: "hidden",
  },
  designTypesTxt: {
    fontWeight: "500",
    margin: spacingY._5,
  },
  desigTypesImg: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    alignSelf: "flex-end",
    marginRight: normalizeX(-6),
  },
  categoryList: {
    paddingHorizontal: spacingX._15,
    gap: spacingX._12,
  },
  designList: {
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
  },
});

export default Templates;
