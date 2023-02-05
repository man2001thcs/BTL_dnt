import React from "react";

import {
  Button,
  IconButton,
  HStack,
  Avatar,
  Image,
  Box,
  Icon,
  Badge,
  Heading,
  Text,
  useToast,
  AlertDialog,
} from "native-base";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import GenerateRandomCode from "react-random-code-generator";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

import link from "../../../../../../config/const.js";
import { useNavigation } from "@react-navigation/native";
import ToastAlert from "../../alert";

function Home_badge({ emailS, codeS, user_id, info, visit, user_account }) {
  const toast = useToast();
  const navigation = useNavigation();
  const dimensions = Dimensions.get("window");
  const [friend_data, setFriendData] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  //console.log(visit);

  const fetchData = async () => {
    const getComment_link =
      link.server_link +
      "controller/friend/friend_state.php" +
      "?timeStamp=" +
      GenerateRandomCode.TextCode(8);

    console.log(info);

    await fetch(getComment_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailS1: emailS,
        emailS2: user_account,
        codeS: codeS,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        if (parseInt(data?.id) === 1) {
          let response_data = JSON.parse(data?.data);
          //console.log(response_data);
          setFriendData(response_data);
        }
      })
      .catch((error) => {
        console.error("Error 1:", error);
      });
  };

  const accept_declineFunction = (command) => {
    let command_line = command === 1 ? "Kết bạn" : "Hủy kết bạn";
    fetch(
      link.server_link +
        "controller/friend/accept-decline.php?timeStamp=" +
        GenerateRandomCode.TextCode(8),
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: friend_data?.second?.FriendRelation?.id,
          emailS2: user_account,
          emailS1: emailS,
          codeS: codeS,
          command: command,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success:", data);
        if (data?.code === "REQUEST_CREATE_OK") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={command_line + " thành công"}
                  variant="solid"
                  description=""
                  isClosable={true}
                />
              );
            },
          });
          props.refreshData();
        } else {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={command_line + " thất bại"}
                  variant="solid"
                  description="Vui lòng thử lại"
                  isClosable={true}
                />
              );
            },
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title={command_line + " thất bại"}
                variant="solid"
                description={"Error: " + error + ". Vui lòng thử lại."}
                isClosable={true}
              />
            );
          },
        });
      });
  };

  const block_function = (command) => {
    fetch(
      link.server_link +
        "controller/friend/busted.php?timeStamp=" +
        GenerateRandomCode.TextCode(8),
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: friend_data?.second?.FriendRelation?.id,
          emailS2: user_account,
          emailS1: emailS,
          codeS: codeS,
          command: command,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success:", data);
        if (data?.code === "REQUEST_CREATE_OK") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={"Block thành công"}
                  variant="solid"
                  description=""
                  isClosable={true}
                />
              );
            },
          });
        } else {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={"Block thất bại"}
                  variant="solid"
                  description="Vui lòng thử lại"
                  isClosable={true}
                />
              );
            },
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title={command_line + " thất bại"}
                variant="solid"
                description={"Error: " + error + ". Vui lòng thử lại."}
                isClosable={true}
              />
            );
          },
        });
      });
  };

  const sendFunction = (command) => {
    let command_line = command === 1 ? "Gửi lời mời kết bạn" : "Gỡ";
    fetch(
      link.server_link +
        "controller/friend/send.php?timeStamp=" +
        GenerateRandomCode.TextCode(8),
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: props.id,
          emailS2: user_account,
          emailS1: emailS,
          codeS: codeS,
          command: command,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success:", data);
        if (data?.code === "REQUEST_CREATE_OK") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={command_line + " thành công"}
                  variant="solid"
                  description=""
                  isClosable={true}
                />
              );
            },
          });
          props.refreshData();
        } else {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title={command_line + " thất bại"}
                  variant="solid"
                  description="Vui lòng thử lại"
                  isClosable={true}
                />
              );
            },
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title={command_line + " thất bại"}
                variant="solid"
                description={"Error: " + error + ". Vui lòng thử lại."}
                isClosable={true}
              />
            );
          },
        });
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const Block_Dialog = () => {
    if (parseInt(friend_data?.first?.FriendRelation?.type) !== 3) {
      return (
        <Box>
          <Button
            w={((dimensions.width - 20) * 1) / 5}
            bgColor="red.600"
            onPress={() => setIsOpen(!isOpen)}
            borderRightRadius="4"
          >
            Block
          </Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Block người dùng</AlertDialog.Header>
              <AlertDialog.Body>
                Bạn chắc chắn muốn thực hiện hành động này?
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme="danger"
                    onPress={async () => {
                      await block_function(1);
                      setIsOpen(false);
                    }}
                  >
                    Block
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Box>
      );
    } else {
      return (
        <Box>
          <Button
            w={((dimensions.width - 20) * 1.5) / 5}
            bgColor="gray.400"
            onPress={() => setIsOpen(!isOpen)}
            borderRightRadius="4"
            size={"sm"}
          >
            Gỡ block
          </Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Gỡ block người dùng</AlertDialog.Header>
              <AlertDialog.Body>
                Bạn chắc chắn muốn thực hiện hành động này?
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorScheme="danger"
                    onPress={async () => {
                      await block_function(0);
                      setIsOpen(false);
                    }}
                  >
                    Gỡ Block
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Box>
      );
    }
  };

  const FriendState = () => {
    if (parseInt(friend_data?.first?.FriendRelation?.type) === 0) {
      return (
        <Button.Group
          isAttached
          direction="row"
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button w={((dimensions.width - 20) * 3.5) / 5}>
            Đợi phản hồi kết bạn
          </Button>

          <Block_Dialog />
        </Button.Group>
      );
    } else if (
      parseInt(friend_data?.second?.FriendRelation?.type) === 0 &&
      parseInt(friend_data?.first?.FriendRelation?.type) !== 3
    ) {
      return (
        <Button.Group
          isAttached
          direction="row"
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button
            w={((dimensions.width - 20) * 3.5) / 5}
            onPress={() => accept_declineFunction(1)}
          >
            Chấp nhận lời mời
          </Button>

          <Block_Dialog />
        </Button.Group>
      );
    } else if (
      parseInt(friend_data?.first?.FriendRelation?.type) === 3
    ) {
      return (
        <Button.Group
          isAttached
          direction="row"
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button
            w={((dimensions.width - 20) * 3.5) / 5}
          >
            Đang bị người dùng block
          </Button>

          <Block_Dialog />
        </Button.Group>
      );
    } else if (
      parseInt(friend_data?.first?.FriendRelation?.type) === 1 &&
      parseInt(friend_data?.second?.FriendRelation?.type) === 1
    ) {
      return (
        <Button.Group
          isAttached
          direction="row"
          colorScheme="green"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button w={((dimensions.width - 20) * 3.5) / 5}>Đã là bạn bè</Button>

          <Block_Dialog />
        </Button.Group>
      );
    } else if (
      friend_data?.first?.length === 0 &&
      friend_data?.second?.length === 0
    ) {
      return (
        <Button.Group
          isAttached
          direction="row"
          colorScheme="blue"
          mx={{
            base: "auto",
            md: 0,
          }}
          size="sm"
        >
          <Button
            w={((dimensions.width - 20) * 3.5) / 5}
            onPress={() => sendFunction(1)}
          >
            Kết bạn
          </Button>

          <Block_Dialog />
        </Button.Group>
      );
    }
  };

  return (
    <Box justifyContent="center" bgColor={"white"} py="2">
      <HStack height={(dimensions.width * 9) / 16} bgColor="green.200">
        <Image
          source={{
            uri:
              link.user_image_link +
              user_id +
              "/background/background.png?timeStamp=" +
              GenerateRandomCode.TextCode(8),
          }}
          alt="Alternate Text"
          style={{
            width: dimensions.width,
            height: (dimensions.width * 9) / 16,
          }}
        />
      </HStack>
      <HStack>
        <Avatar
          ml="3"
          mt={-dimensions.height / 8}
          bg="white"
          borderWidth="4"
          borderColor="green.300"
          p="0.5"
          source={{
            uri:
              link.user_image_link +
              user_id +
              "/avatar/avatar_this.png?timeStamp=" +
              GenerateRandomCode.TextCode(8),
          }}
          size="2xl"
        >
          NB
          {(user_account === emailS) && (
            <Avatar.Badge>
              <IconButton
                variant="solid"
                bg="green.500"
                colorScheme="green"
                borderRadius="full"
                size={6}
                onPress={() => navigation.navigate("AvatarSetting")}
                icon={
                  <Icon
                    as={AntDesign}
                    size="4"
                    name="camera"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="warmGray.50"
                  />
                }
              />
            </Avatar.Badge>
          )}
        </Avatar>
      </HStack>
      <HStack my="3">
        {!visit ? (
          <Button.Group
            isAttached
            direction="column"
            colorScheme="blue"
            mx={{
              base: "auto",
              md: 0,
            }}
            size="sm"
          >
            <Button
              w={dimensions.width - 20}
              bgColor={"green.600"}
              onPress={() =>
                navigation.navigate("Create_post", {
                  edit: 0,
                  post_state: 2,
                })
              }
            >
              Thêm vào tin
            </Button>
            <Button
              variant="outline"
              onPress={() => navigation.navigate("Setting")}
              _text={{
                color: "green.700",
              }}
            >
              Chỉnh sửa thông tin
            </Button>
          </Button.Group>
        ) : (
          <FriendState></FriendState>
        )}
      </HStack>

      <HStack my="3">
        <Box px="3">
          <HStack>
            <Heading fontSize="18">Chi tiết</Heading>
          </HStack>
          <HStack>
            <Icon as={AntDesign} name="phone" size="md" color="black.700" />
            <Text fontSize="16" bold>
              {" "}
              Tên:{" "}
              <Text italic>{info?.User?.fullname ?? "Chưa có thông tin"}</Text>
            </Text>
          </HStack>
          <HStack>
            <Icon as={AntDesign} name="home" size="md" color="black.700" />
            <Text fontSize="16" bold>
              {" "}
              Nơi ở:{" "}
              <Text italic>{info?.User?.address ?? "Chưa có thông tin"}</Text>
            </Text>
          </HStack>
          <HStack>
            <Icon as={AntDesign} name="phone" size="md" color="black.700" />
            <Text fontSize="16" bold>
              {" "}
              Số điện thoại:{" "}
              <Text italic>
                {info?.User?.phone_number ?? "Chưa có thông tin"}
              </Text>
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="16" bold>
              {" "}
              Ngày sinh:{" "}
              <Text italic>{info?.User?.birthday ?? "Chưa có thông tin"}</Text>
            </Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default React.memo(Home_badge);
