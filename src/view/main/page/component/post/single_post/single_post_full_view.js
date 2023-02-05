import React, { memo } from "react";
import { FlatList } from "native-base";
import { Box, HStack, useToast, Heading, Spinner, Image } from "native-base";

import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import GenerateRandomCode from "react-random-code-generator";

import link from "../../../../../../config/const";

import ToastAlert from "../../alert";
import { Dimensions } from "react-native";
import Single_post_full_view_top from "./single_post_full_view_top";
import Create_comment from "../../comment/create_comment/create_comment";
import Single_comment from "../../comment/single_comment/single_comment";
import Loading_screen from "../../comment/loading_screen";

const SinglePost = ({
  setSharePost,
  onOpen,
  this_user_id,
  onClose,
  route_params,
}) => {
  const dimensions = Dimensions.get("window");
  const [post_data, setPostData] = React.useState([]);
  const toast = useToast();

  const [showNumber, setShowNumber] = React.useState(0);
  const navigation = useNavigation();

  const [refresh_now, setRefresh] = React.useState(false);
  const [load_more, setLoadMore] = React.useState(false);
  const [cant_load_more, setCantLoadMore] = React.useState(false);

  const [comment_list, setCommentList] = React.useState([]);
  const [comment_input_focus, setComment_input_focus] = React.useState(false);

  const inputElement = React.useRef();

  const commentIndex_ref = React.useRef();

  const goIndex = (index) => {
    commentIndex_ref?.current?.scrollToIndex({ index });
  };

  console.log(route_params);

  const focusInput = () => {
    //console.log("fuck");
    inputElement.current.focus();
  };

  const fetchData_post = async () => {
    const getPost_link =
      link.post_single_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);
    await fetch(getPost_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: route_params.id,
        emailS: route_params.emailS,
        codeS: route_params.codeS,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success", data);
        if (parseInt(data?.id) === 1) {
          let response_data = JSON.parse(data?.data);
          console.log(response_data);
          setPostData(response_data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title="Lấy dữ liệu thất bại"
                variant="solid"
                description={"Lỗi: " + error}
                isClosable={true}
              />
            );
          },
        });
      });
  };

  const fetchData_comment = async () => {
    const getComment_link =
      link.commment_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);

    //console.log(route_params);

    await fetch(getComment_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        post_id: route_params.id,
        limit: showNumber,
        emailS: route_params.emailS,
        codeS: route_params.codeS,
        comment_id_prio:
          route_params?.comment_id_prio !== undefined
            ? route_params?.comment_id_prio
            : 0,
        getMore: 1,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);

        if (parseInt(data?.id) !== 1) {
          setCantLoadMore(true);
          setLoadMore(false);
        } else if (parseInt(data?.id) === 1) {
          if (showNumber === 0) {
            setShowNumber(10);
          } else {
            setShowNumber(showNumber + 5);
          }

          let response_data = JSON.parse(data?.data);
          //console.log(response_data);
          setCommentList(response_data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const refreshData_comment = async () => {
    const getComment_link =
      link.commment_link + "?timeStamp=" + GenerateRandomCode.TextCode(8);

    var values = {
      limit: 5,
      emailS: route_params.emailS,
      codeS: route_params.codeS,
      getMore: 0,
      post_id: route_params.id,
    };

    await fetch(getComment_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success:", data);

        if (parseInt(data?.id) === 0) {
          setCantLoadMore(true);
        } else if (parseInt(data?.id) === 1) {
          let response_data = JSON.parse(data?.data);
          console.log(response_data);
          setCommentList(response_data);
        }
      })
      .catch((error) => {
        //console.error("Error:", error);
      });

    setShowNumber(10);
    setCantLoadMore(false);
    setLoadMore(false);
    setRefresh(false);
  };

  React.useEffect(() => {
    fetchData_post();
    fetchData_comment();
  }, []);

  React.useEffect(() => {
    if (
      route_params?.comment_id_prio !== undefined &&
      route_params?.comment_id_prio > 0 &&
      comment_list.length > 0
    ) {
      setTimeout(() => {
        goIndex(0);
      }, 1000);
    }
  }, [route_params.comment_id_prio, comment_list]);

  const renderItem = ({ item, index }) => {
    if (
      item?.Comment.id !== null &&
      item !== undefined &&
      item?.Comment.id !== undefined
    )
      return (
        <Single_comment
          key={item?.Comment.id}
          id={item?.Comment.id}
          post_id={item?.Comment.post_id}
          user_id={item?.Comment.user_id}
          user_account={item?.Comment.user_account}
          user_name={item?.Comment.user_name}
          comment_body={item?.Comment.comment_body}
          img_num={item?.Comment.img_num}
          created={item?.Comment.created}
          modified={item?.Comment.modified}
          rank={item?.Comment.rank}
          emailS={route_params.emailS}
          codeS={route_params.codeS}
          navigation={navigation}
          bgColor_prio={
            route_params?.comment_id_prio !== undefined &&
            item?.Comment.id === route_params?.comment_id_prio
              ? "green.100"
              : "white"
          }
          style={{ flex: 1 }}
        />
      );
  };

  //memolized render value
  const memoizedValue = React.useMemo(() => renderItem, [comment_list]);

  //loading sreen

  const EmptyScreen = () => {
    return (
      <Box>
        <HStack
          space={2}
          justifyContent="center"
          justifyItems="center"
          py="4"
          bgcolor="white"
          mt="50"
        >
          <Image
            source={require("../../../../../../img/no_comment.jpg")}
            alt="Alternate Text"
            size="xl"
          />
        </HStack>
        <HStack justifyContent="center">
          <Heading color="green.500" fontSize="xl">
            Chưa có bình luận
          </Heading>
        </HStack>
      </Box>
    );
  };

  const memoEmptyScreen = React.useMemo(() => EmptyScreen, [comment_list]);

  //console.log(route_params.created);
  return (
    <Box my="1" px="1" bgColor="white" flex="1">
      <HStack>
        <FlatList
          ref={(ref) => (commentIndex_ref.current = ref)}
          style={{
            flex: 1,
            height: dimensions.height * 0.72,
            marginBottom: 130,
          }}
          data={comment_list}
          ListHeaderComponent={() => {
            return (
              <Single_post_full_view_top
                id={route_params.id}
                author_id={post_data?.Post?.user_id}
                author_account={post_data?.Post?.user_account}
                author_name={post_data?.Post?.user_name}
                post_body={post_data?.Post?.post_body}
                img_num={post_data?.Post?.img_num}
                created={post_data?.Post?.created}
                modified={post_data?.Post?.modified}
                share_id={post_data?.Post?.share_id}
                emailS={route_params.emailS}
                codeS={route_params.codeS}
                navigation={navigation}
                user_id={this_user_id}
                publicity_state={post_data?.Post?.publicity_state}
                fullView={false}
                setSharePost={setSharePost}
                onOpen={onOpen}
                onClose={onClose}
                setComment_input_focus={setComment_input_focus}
                focusInput={focusInput}
              />
            );
          }}
          renderItem={memoizedValue}
          keyExtractor={(item) => item?.Comment?.id}
          onEndReachedThreshold={0.5}
          ListFooterComponent={!cant_load_more && <Loading_screen />}
          ListEmptyComponent={cant_load_more && memoEmptyScreen}
          onEndReached={() => {
            if (!cant_load_more) {
              setLoadMore(true);
              fetchData_comment();
            }
          }}
        />
      </HStack>

      <HStack
        position="absolute"
        left="0"
        right="0"
        bottom="-4"
        bgColor="white"
        zIndex={2}
      >
        <Create_comment
          emailS={route_params.emailS}
          codeS={route_params.codeS}
          post_id={route_params.id}
          refreshData={refreshData_comment}
          isFocus={comment_input_focus}
          inputElement={inputElement}
        />
      </HStack>
    </Box>
  );
};

export default memo(SinglePost);
