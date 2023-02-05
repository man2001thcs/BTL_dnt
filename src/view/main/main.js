import React from "react";

import { Platform, StatusBar, View, Alert } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Badge,
  Text,
  Center,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";

import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import Home from "./page/home";
import FriendList from "./page/friend";
import NotifyList from "./page/notification";
import Menu from "./page/menu";
import { memo } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useNetInfo, NetInfoState } from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import ToastAlert from "./page/component/alert";
import link from "../../config/const";
import GenerateRandomCode from "react-random-code-generator";

function Main({ emailS, codeS, this_user_id, setLogin, info }) {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const toast = useToast();
  const [notify_number, setNotify_number] = React.useState(0);
  const [friend_number, setFriend_number] = React.useState(0);
  console.log("number: " + friend_number);

  const internetState = useNetInfo();

React.useEffect(() => {
  if (internetState.isConnected === false) {
    Alert.alert(
      "Mất kết nối mạng ❌",
      "Vui lòng kiểm tra lại kết nối.",
      [{ text: "Ok" }]
    );
  }
}, [internetState.isConnected]);

  const fetchData_notify_number = async () => {
    let getNotification_link =
      link.notify_number_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);
    //console.log(getNotification_link);
    await fetch(getNotification_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailS: emailS,
        codeS: codeS,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success note: ", data);

        if (parseInt(data?.id) === 1) {
          setNotify_number(data?.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchData_friend_req_number = async () => {
    let getFriend_link =
      link.friend_request_num_link +
      "?timeStamp=" +
      GenerateRandomCode.TextCode(8);
    console.log(getFriend_link);
    await fetch(getFriend_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailS: emailS,
        codeS: codeS,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success note: ", data);

        if (parseInt(data?.id) === 1) {
          setFriend_number(data?.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData_notify_number();
      fetchData_friend_req_number();
    }, [navigation])
  );
  //console.log(notify_number);

  return (
    <Box flex="1" pt="2" bgColor="white" safeAreaTop>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Flex direction="row" space={8} mr="3" bgColor="white">
        <Heading size="md" color="green.700" fontWeight="bold" ml="4" mt="1">
          Social
        </Heading>

        <Spacer></Spacer>

        <IconButton
          borderRadius={50}
          mr="2"
          _icon={{
            as: AntDesign,
            name: "plus",
            color: "black",
          }}
          bgColor="gray.200"
        />

        <IconButton
          colorScheme="indigo"
          borderRadius={50}
          bgColor="gray.200"
          _icon={{
            as: AntDesign,
            name: "search1",
            color: "black",
          }}
          onPress={() => navigation.navigate("Search_page")}
        />
      </Flex>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#15803d",
          showLabel: false,
          style: {
            size: "14",
          },
          tabBarIndicatorStyle: { backgroundColor: "green" },
        }}
      >
        <Tab.Screen
          name="Home"
          children={({ navigation }) => (
            <Home
              this_user_id={this_user_id}
              codeS={codeS}
              emailS={emailS}
              navigation={navigation}
            ></Home>
          )}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Friendlist"
          children={({ navigation }) => (
            <FriendList
              this_user_id={this_user_id}
              codeS={codeS}
              emailS={emailS}
              navigation={navigation}
              friend_number={friend_number}
              setFriend_number={setFriend_number}
              fetchData_friend_req_number={fetchData_friend_req_number}
            ></FriendList>
          )}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Box>
                {friend_number > 0 && (
                  <View
                    style={{
                      height: 17,
                      width: 16.5,
                      position: "absolute",
                      marginTop: -6,
                      marginLeft: 26,
                      borderRadius: 10,
                    }}
                  >
                    <Center>
                      <Button
                        size={4}
                        rounded="md"
                        bgColor={"red.700"}
                        px="1"
                        _text={{
                          fontSize: 9,
                          fontWeight: "bold",
                        }}
                      >
                        {friend_number}
                      </Button>
                    </Center>
                  </View>
                )}
                <FontAwesome5 name="user-friends" size={22} color={color} />
              </Box>
            ),
          }}
        />
        <Tab.Screen
          name="NotifyList"
          children={({ navigation }) => (
            <NotifyList
              this_user_id={this_user_id}
              codeS={codeS}
              emailS={emailS}
              navigation={navigation}
              setNotify_number={setNotify_number}
            ></NotifyList>
          )}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Box>
                {notify_number > 0 && (
                  <View
                    style={{
                      height: 17,
                      width: 16.5,
                      position: "absolute",
                      marginTop: -6,
                      marginLeft: 20,
                      borderRadius: 10,
                    }}
                  >
                    <Center>
                      <Button
                        size={4}
                        rounded="md"
                        bgColor={"red.700"}
                        _text={{
                          fontSize: 9,
                          fontWeight: "bold",
                        }}
                      >
                        {notify_number}
                      </Button>
                    </Center>
                  </View>
                )}

                <Ionicons name="notifications" size={24} color={color} />
              </Box>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          children={(props) => (
            <Menu
              codeS={codeS}
              emailS={emailS}
              this_user_id={this_user_id}
              setLogin={setLogin}
              route_params={props.route.params}
            ></Menu>
          )}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="menu" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </Box>
  );
}
export default memo(Main);
