/** @format */

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  safeAreaText: { flex: 1, paddingBottom: 20 },
  headingText: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: Platform.OS === "android" ? 30 : 10,
    justifyContent: "space-between",
  },
  userDetailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  titleText: { fontSize: 25, fontWeight: "600", color: "black" },
  discordImageStyle: { height: 30, width: 30, resizeMode: "contain" },
  titleView: { paddingHorizontal: 20 },
  currentView: { flexDirection: "row", marginTop: 20 },
  manImg: {
    height: 100,
    width: 100,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "black",
    resizeMode: "contain",
  },
  boldText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginTop: "5%",
  },
  normalText: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    marginTop: "4%",
  },
  TouchText: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    borderBottomWidth: 4,
    borderColor: "black",
    height: 40,
  },
  TouchText2: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    height: 40,
  },
  TouchableText: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginLeft: 30,
    borderBottomWidth: 4,
    borderColor: "black",
    height: 40,
  },
  TouchableText2: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginLeft: 30,

    height: 40,
  },

  ImgText: { height: 15, width: 15, resizeMode: "contain" },
  TextStyle: {
    color: "black",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 16,
  },
  TextStyles: {
    color: "grey",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 16,
  },
  TextsStyle: {
    color: "black",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 16,
  },
  TextsStyles: {
    color: "grey",
    marginLeft: 5,
    fontWeight: "700",
    fontSize: 16,
  },
  smalText: {
    flexDirection: "row",

    paddingHorizontal: 20,
  },
  componentText2: { marginLeft: 5 },
  smallFlatList2: {
    height: screenHeight / 1.5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  smileImg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    position: "absolute",
    bottom: -10,
    marginLeft: 60,
  },
  seperateText: { marginTop: 20 },
  flexText: { flex: 1 },
  listText: { marginLeft: 5 },
});
