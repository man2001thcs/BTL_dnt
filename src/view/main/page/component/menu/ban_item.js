import React from "react";
import { Pressable } from "react-native";
import {
  Text,
  Box,
  Button,
  HStack,
  Avatar,
  Flex,
  VStack,
  useToast,
  Spacer,
  IconButton,
  Icon,
} from "native-base";
import GenerateRandomCode from "react-random-code-generator";


import link from "../../../../../config/const";

function Ban_user(props) {
  return (
    <Box my="0.5" mx="2" px="1" pt="1" bgColor="white">
      <HStack direction="row" space={2} px="2">
        <VStack></VStack>
        <VStack>
          <Pressable
            onPress={() =>
              props.navigation.navigate("Personal_home", {
                user_id_click: props.user_id,
                user_account_click: props.user_account,
              })
            }
          >
            <Avatar
              size="sm"
              bg="white"
              borderWidth="2"
              borderColor="green.500"
              p="0.5"
              source={{
                uri:
                  link.user_image_link +
                  props.user_id +
                  "/avatar/avatar_this.png?timeStamp=" +
                  GenerateRandomCode.TextCode(8),
              }}
            >
              {props.user_name}
              <Avatar.Badge></Avatar.Badge>
            </Avatar>
          </Pressable>
        </VStack>

        <VStack>
          <Flex direction="row" space="4" mb="2">
            <VStack>
              <HStack>
                <Text bold fontSize="lg">
                  {props.user_account === props.emailS
                    ? "Bạn"
                    : props.user_name}
                </Text>
              </HStack>
            </VStack>
            <Spacer w="5" />
          </Flex>
        </VStack>
      </HStack>
    </Box>
  );
}

export default React.memo(Ban_user);
