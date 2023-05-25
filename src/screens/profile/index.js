/** @format */

import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Gallary from "../../components/gallary";
import { styles } from "./styles";
import { userData, userGallaryData, userWonderData } from "../../services";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  const [showdata, setShowdata] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [user, setUser] = useState([]);
  const [gallaryData, setGallaryData] = useState([]);
  const [selfData, setSelfData] = useState([]);

  const displayData = () => {
    setShowdata(true);
    setIsChecked1(true);
    setIsChecked2(false);
  };
  const wonderData = () => {
    setShowdata(false);
    setIsChecked1(false);
    setIsChecked2(true);
  };

  useEffect(() => {
    // getting user profile data
    userData((data) => {
      setUser(data);
    });
    // getting user my gallary data
    userGallaryData((data) => {
      setGallaryData(data);
    });
    //getting user wonder data
    userWonderData((data) => {
      setSelfData(data);
    });
  }, []);

  const handleOnPress = (source) => {
    navigation.navigate("ImageViewer", { source });
  };

  return (
    <SafeAreaView style={styles.safeAreaText}>
      <View style={styles.headingText}>
        <Text style={styles.titleText}>Wonder</Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/discord.png")}
            style={styles.discordImageStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <View style={styles.currentView}>
          <Image source={{ uri: user[0]?.profileUrl }} style={styles.manImg} />
          <View style={styles.userDetailContainer}>
            <Text style={styles.boldText}>{user[0]?.userName}</Text>
            <Text style={styles.normalText}>{gallaryData.length}+ Art</Text>
            <Text style={styles.normalText}>{user[0]?.bio}</Text>
          </View>
        </View>
        <View style={styles.smalText}>
          <TouchableOpacity
            onPress={() => displayData()}
            style={isChecked1 ? styles.TouchText : styles.TouchText2}
          >
            <Image
              source={require("../../assets/images/gallary.png")}
              style={styles.ImgText}
            />
            <Text style={isChecked1 ? styles.TextsStyle : styles.TextsStyles}>
              My Gallary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => wonderData()}
            style={isChecked2 ? styles.TouchableText : styles.TouchableText2}
          >
            <Image
              source={require("../../assets/images/rate.png")}
              style={styles.ImgText}
            />
            <Text style={isChecked2 ? styles.TextStyle : styles.TextStyles}>
              WonderSelf
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
      {showdata === true ? (
        <View style={styles.smallFlatList2}>
          <FlatList
            style={styles.listText}
            numColumns={3}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={() => <View style={styles.seperateText} />}
            data={gallaryData}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.flexText}>
                  <Gallary
                    source={{ uri: item.imgUrl }}
                    title={item.imgTitle}
                    handleOnPress={handleOnPress}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : null}
      {isChecked2 === true ? (
        <View style={styles.smallFlatList2}>
          <FlatList
            style={styles.listText}
            numColumns={3}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={() => <View style={styles.seperateText} />}
            data={selfData}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.flexText}>
                  <Gallary
                    source={{ uri: item.imgUrl }}
                    title={item.imgTitle}
                    handleOnPress={handleOnPress}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Profile;
