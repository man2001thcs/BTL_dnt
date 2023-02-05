import React from "react";
import { FlatList } from "react-native";
import { HStack, Box, Heading, Spinner, useToast } from "native-base";

import link from "../../../../../../config/const";
import GenerateRandomCode from "react-random-code-generator";
import { useNavigation } from "@react-navigation/native";
import Emo_item from "./sub_component/emo_item";

export default function EmoList({
  emailS,
  codeS,
  this_user_id,
  navigation,
  route_params,
}) {

  const [emo_list, setEmoList] = React.useState([]);

  const fetchData = async () => {
    const getPost_emo_link =
      link.post_emo_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);
    await fetch(getPost_emo_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: route_params.post_id,
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
          setEmoList(response_data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);  
      });
  };

  console.log(emo_list);

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Emo_item
        id={item?.User.id}
        user_id={item?.User.id}
        user_account={item?.User.email}
        user_name={item?.User.fullname}
        emailS={emailS}
        codeS={codeS}
        navigation={navigation}
        your_id={this_user_id}
        emo={item?.emo}
      />
    );
  };

  const memoizedValue = React.useMemo(() => renderItem, [emo_list]);

  return (
    <Box flex="1" mt="0" bgColor="white">
      <HStack>
        <FlatList
          data={emo_list}
          renderItem={memoizedValue}
          keyExtractor={(item) => item?.User.id}
        />
      </HStack>
    </Box>
  );
}
