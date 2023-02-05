import React from "react";
import { FlatList } from "react-native";
import { HStack, Box, Heading, Spinner, useToast } from "native-base";

import link from "../../../config/const";
import GenerateRandomCode from "react-random-code-generator";
import { useNavigation } from "@react-navigation/native";
import Ban_item from "./component/menu/ban_item";

export default function BanList({
  emailS,
  codeS,
  this_user_id,
  route_params,
}) {

  const [ban_list, setBanList] = React.useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    const getPost_ban_link =
      link.ban_list_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);
    await fetch(getPost_ban_link, {
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
        console.log("Success1", data);

        if (parseInt(data?.id) === 1) {
          let response_data = JSON.parse(data?.data);
          console.log(response_data);
          setBanList(response_data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);  
      });
  };

  console.log(ban_list);

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Ban_item
        id={item?.User.id}
        user_id={item?.User.id}
        user_account={item?.User.email}
        user_name={item?.User.fullname}
        emailS={emailS}
        codeS={codeS}
        navigation={navigation}
        your_id={this_user_id}
      />
    );
  };

  const memoizedValue = React.useMemo(() => renderItem, [ban_list]);

  return (
    <Box flex="1" mt="0" bgColor="white">
      <HStack>
        <FlatList
          data={ban_list}
          renderItem={memoizedValue}
          keyExtractor={(item) => item?.User.id}
        />
      </HStack>
    </Box>
  );
}
