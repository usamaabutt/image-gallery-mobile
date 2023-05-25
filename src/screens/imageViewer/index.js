import React from "react";
import { StyleSheet, View, Image } from "react-native";

const ImageViewer = ({ route }) => {
  const { source } = route.params;
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.imageStyle} />
    </View>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain",
  },
});
