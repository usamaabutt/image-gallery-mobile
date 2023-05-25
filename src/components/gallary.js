/** @format */

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Gallary = ({ source, title, handleOnPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleOnPress(source)}
      style={styles.mainView}
    >
      <Image source={source} style={styles.ImgText} />
      <View style={styles.TextView}>
        <Text numberOfLines={2} style={styles.textStyle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Gallary;

const styles = StyleSheet.create({
  ImgText: {
    height: 200,
    width: "90%",
    borderRadius: 10,
  },
  mainView: { flex: 1 },
  TextView: { width: "90%", alignItems: "center", marginTop: 10 },
  textStyle: { color: "black", fontSize: 18 },
});
