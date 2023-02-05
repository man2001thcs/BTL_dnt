import React from "react";
import { Icon, HStack, Text, IconButton, Heading } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//Show emotion list of the post that people has already interacted
function Emotion_already({
  like_num,
  dislike_num,
  love_num,
  hate_num,
  user_appear,
  post_id
}) {
  const navigation = useNavigation();
  //total of people that interact with post
  const emo_sum =
    parseInt(like_num) +
    parseInt(dislike_num) +
    parseInt(love_num) +
    parseInt(hate_num);
  //console.log(parseInt(hate_num));
  const Context = () => {
    if (parseInt(user_appear) === 1) {
      return (
        <Text bold>
          {emo_sum - 1 > 0
            ? " Bạn và " + (emo_sum - 1) + " người khác"
            : " Tôi"}
        </Text>
      );
    } else {
      return (
        <Text bold ml="2">
          {emo_sum > 0 ? emo_sum : ""}
        </Text>
      );
    }
  };

  return (
    <HStack alignItems="center">
      {parseInt(like_num) > 0 && (
        <IconButton
          variant="solid"
          bg="green.500"
          colorScheme="green"
          borderRadius="full"
          size="sm"
          icon={
            <Icon
              as={AntDesign}
              name="like1"
              _dark={{
                color: "warmGray.50",
              }}
              color="warmGray.50"
            />
          }
        />
      )}
      {parseInt(dislike_num) > 0 && (
        <IconButton
          variant="solid"
          bg="amber.400"
          colorScheme="amber"
          borderRadius="full"
          size="sm"
          icon={
            <Icon
              as={AntDesign}
              _dark={{
                color: "warmGray.50",
              }}
              name="dislike1"
              color="warmGray.50"
            />
          }
        />
      )}
      {parseInt(love_num) > 0 && (
        <IconButton
          variant="solid"
          bg="red.500"
          colorScheme="red"
          borderRadius="full"
          size="sm"
          icon={
            <Icon
              as={AntDesign}
              _dark={{
                color: "warmGray.50",
              }}
              name="heart"
              color="warmGray.50"
            />
          }
        />
      )}
      {parseInt(hate_num) > 0 && (
        <IconButton
          variant="solid"
          bg="violet.600"
          colorScheme="violet"
          borderRadius="full"
          size="sm"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="heart-broken"
              _dark={{
                color: "warmGray.50",
              }}
              color="warmGray.50"
            />
          }
        />
      )}
      <Context></Context>
      {emo_sum > 0 && (
        <IconButton
          variant="ghost"
          borderRadius="full"
          size="sm"
          colorScheme="green"
          _icon={{
            as: AntDesign,
            name: "right",
          }}
          onPress={() =>
            navigation.navigate("Emo_list", {
              post_id: post_id,
            })
          }
        />
      )}
      {emo_sum === 0 && (
        <Text bold color="green.600" fontSize="16">
          Hãy là người đầu tiên bày tỏ cảm xúc
        </Text>
      )}
    </HStack>
  );
}

export default React.memo(Emotion_already);
