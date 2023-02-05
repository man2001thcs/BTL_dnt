import React, { memo } from "react";

import {
  Text,
  Box,
  Button,
  HStack,
  Divider,
  Avatar,
  Flex,
  VStack,
  Spacer,
  Icon,
  ScrollView,
  useToast,
} from "native-base";

import { TouchableOpacity, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import GenerateRandomCode from "react-random-code-generator";

import Image_show from "../img_function/img_show";
import Like_button from "./sub_component/emotion_button/like_button";
import Comment_share from "./sub_component/comment_share_number/comment_share";
import Emotion_number from "./sub_component/emotion_number/emotion_number";
import Menu_button from "./sub_component/menu_button/menu_button";
import Time_show from "./sub_component/time_show/time_show";
import link from "../../../../../../config/const";
import Share_post_view from "./share_post_view";
import Post_body from "./sub_component/post_body/post_body";
import ToastAlert from "../../alert";

const SinglePost = (props) => {
  const toast = useToast();

  //time difference since created
  const time_distance_5 = Math.round(
    (new Date().valueOf() -
      new Date(props?.created?.replace(/-/g, "/")).valueOf()) /
      300000
  );

  const time_modified = Math.round(
    (new Date(props?.modified?.replace(/-/g, "/")).valueOf() -
      new Date(props?.created?.replace(/-/g, "/")).valueOf()) /
      60000
  );

  //console.log("post_data: " + props.author_id);

  const [like_click, setLike_click] = React.useState(false);

  const navigation = useNavigation();
  const author_avatar_link =
    link.user_image_link +
    parseInt(props.author_id) +
    "/avatar/avatar_this.png?timeStamp=" +
    GenerateRandomCode.TextCode(8);

  console.log(author_avatar_link);
  return (
    <Box my="1" px="1" bgColor="white">
      <Flex direction="row" space={8} px="2" mt="2">
        <HStack>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Personal_home", {
                user_id_click: props.user_id,
                user_account_click: props.user_account,
              })
            }
          >
            <Avatar
              bg="white"
              borderWidth="2"
              p="0.5"
              borderColor="green.500"
              size="16"
              source={{
                uri: author_avatar_link,
              }}
            >
              {props.user_name}
            </Avatar>
          </TouchableOpacity>
          <VStack ml="2" mt="1.5">
            <HStack>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Personal_home", {
                    user_id_click: props.author_id,
                    user_account_click: props.author_account,
                  })
                }
              >
                <Text bold fontSize="18">
                  {props.author_name}
                </Text>
              </TouchableOpacity>
            </HStack>
            <HStack>
              <Time_show
                time_distance_5={time_distance_5}
                time_modified={time_modified}
                publicity_state={parseInt(props.publicity_state)}
              />
            </HStack>
          </VStack>
        </HStack>

        <Spacer />

        <Menu_button
          id={props.id}
          emailS={props.emailS}
          codeS={props.codeS}
          navigation={navigation}
          old_post_body={props.post_body}
          user_id={props.user_id}
          author_id={props.author_id}
          post_state={props.publicity_state}
        />
      </Flex>

      <Post_body
        emailS={props.emailS}
        share_id={props.share_id}
        author_account={props.author_account}
        post_body={props.post_body}
      />

      {parseInt(props.share_id) > 0 && (
        <Share_post_view
          emailS={props.emailS}
          codeS={props.codeS}
          post_id={props.share_id}
          user_id={props.this_user_id}
        />
      )}

      <Image_show
        img_num={parseInt(props?.img_num)}
        id={props.id}
        fullView={1}
        author_id={props?.author_id}
        author_account={props?.author_account}
        author_name={props?.author_name}
        post_body={props?.post_body}
        share_id={props?.share_id}
        created={props?.created}
        modified={props?.modified}
        comment_num={props?.comment_num}
        emailS={props.emailS}
        codeS={props.codeS}
      />

      <HStack mx="2.5" my="2">
        <Divider
          thickness="2"
          _light={{
            bg: "muted.300",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
      </HStack>

      <HStack
        space={parseInt(props?.share_id) > 0 ? 20 : 8}
        justifyContent="center"
        pb="2"
        px="2"
      >
        <Like_button
          id={props.id}
          author_id={props?.author_id}
          emailS={props.emailS}
          codeS={props.codeS}
          author_account={props?.author_account}
          setLike_click={setLike_click}
          like_click={like_click}
        />

        <Button
          variant="ghost"
          _text={{
            color: "#137950",
            fontSize: 15,
          }}
          endIcon={
            <Icon as={EvilIcons} name="comment" size="md" color="#137950" />
          }
          onPress={props.focusInput}
        >
          Comment
        </Button>
        {parseInt(props?.share_id) <= 0 && (
          <Button
            variant="ghost"
            _text={{
              color: "#137950",
              fontSize: 15,
            }}
            endIcon={
              <Icon as={FontAwesome} name="share" size="md" color="#137950" />
            }
            onPress={async () => {
              await props.setSharePost(props.id);
              props.onOpen();
            }}
          >
            Share
          </Button>
        )}
      </HStack>

      <HStack mx="2.5">
        <Divider
          thickness="2"
          _light={{
            bg: "muted.300",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
      </HStack>

      <HStack ml="5" mt="1.5">
        <Pressable
          onPress={() =>
            navigation.navigate("Emo_list", {
              post_id: props.id,
            })
          }
        >
          <Emotion_number
            emailS={props.emailS}
            codeS={props.codeS}
            post_id={props.id}
            user_id={props.user_id}
            like_click={like_click}
            navigation={navigation}
          />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default memo(SinglePost);
