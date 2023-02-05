import React from "react";
import { FlatList, Image } from "react-native";
import {
  HStack,
  Box,
  Heading,
  Spinner,
  Center,
  Text,
  Button,
} from "native-base";
import GenerateRandomCode from "react-random-code-generator";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";
import link from "../../../config/const";

function Tutorial({ emailS, codeS, phone_number, setLogin }) {
  const navigation = useNavigation();
  const [curPage, setCurPage] = React.useState(0);
  const dimensions = Dimensions.get("window");

  const new_2_old = async (values) => {
    const getSignUp_link =
      link.server_link +
      "controller/user/new_2_old.php?timeStamp=" +
      GenerateRandomCode.TextCode(8);

    await fetch(getSignUp_link, {
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
        //console.log("Success", data);
      })
      .catch((error) => {
        //console.error("Error:", error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title="Thất bại"
                variant="solid"
                description="Vui lòng kiểm tra lại kết nối"
                isClosable={true}
              />
            );
          },
        });
      });
  };

  const next = () => {
    if (curPage < 2) {
      setCurPage(curPage + 1);
    } else if (curPage === 2) {
      new_2_old();
      setLogin(true);
      //navigation.navigate("Main");
    }
  };
  const previous = () => {
    if (curPage >= 1) {
      setCurPage(curPage - 1);
    }
  };
  const skip = () => {
    new_2_old();
    setLogin(true);
    //navigation.navigate("Home");
  };

  const Context = () => {
    if (curPage === 0) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading>Chào mừng đến với Social app</Heading>
          </HStack>
          <HStack justifyContent={"center"} mt={12}>
            <Text fontSize={17}></Text>
          </HStack>
        </Box>
      );
    } else if (curPage === 1) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading>Đăng tải, chia sẻ thông tin</Heading>
          </HStack>
          <HStack justifyContent={"center"} mt={12}>
            <Text fontSize={17} px="6" textAlign={"center"}>
              Bạn có thể chia sẻ thông tin chỉ qua vài thao tác đơn giản, giao
              lưu kết bạn tứ phương
            </Text>
          </HStack>
        </Box>
      );
    } else if (curPage === 2) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading>Bắt đầu ngay</Heading>
          </HStack>
          <HStack justifyContent={"center"} mt={12}>
            <Text fontSize={17} px="6" textAlign={"center"}>
              Hãy cùng hòa nhập vào mạng xã hội mà chúng tôi tạo cho bạn
            </Text>
          </HStack>
        </Box>
      );
    }
  };

  const Image_bunch = () => {
    let imgSource1 = "../../../img/tutorial/1.png";
    let imgSource2 = "../../../img/tutorial/2.png";
    let imgSource3 = "../../../img/tutorial/3.png";

    if (curPage === 0) {
      return (
        <HStack>
          <Image
            source={require(imgSource1)}
            style={{
              width: dimensions.width,
              height: 300,
            }}
            resizeMode="contain"
          />
        </HStack>
      );
    } else if (curPage === 1) {
      return (
        <HStack>
          <Image
            source={require(imgSource2)}
            style={{
              width: dimensions.width,
              height: 300,
            }}
            resizeMode="contain"
          />
        </HStack>
      );
    } else if (curPage === 2) {
      return (
        <HStack>
          <Image
            source={require(imgSource3)}
            style={{
              width: dimensions.width,
              height: 300,
            }}
            resizeMode="contain"
          />
        </HStack>
      );
    }
  };

  return (
    <Box flex="1" mt="0" bgColor={"white"}>
      <Image_bunch></Image_bunch>
      <Context></Context>
      <Box position="absolute" bottom={2} left={0} right={0}>
        <HStack justifyContent={"center"} mb="2">
          <PaginationDot
            activeDotColor={"black"}
            curPage={curPage}
            maxPage={3}
          />
        </HStack>
        <HStack justifyContent={"center"}>
          <Button
            size="md"
            variant="solid"
            rounded={"xl"}
            bgColor={curPage < 2 ? "blue.600" : "green.600"}
            px="32"
            _text={{
              fontWeight: "bold",
            }}
            onPress={() => {
              next();
            }}
          >
            {curPage < 2 ? "Tiếp tục" : "Hoàn thành"}
          </Button>
        </HStack>

        <HStack justifyContent={"center"}>
          <Button
            size="md"
            variant="ghost"
            _text={{
              fontWeight: "bold",
              color: curPage > 0 ? "green.700" : "gray.400",
            }}
            onPress={() => {
              previous();
            }}
            disabled={curPage <= 0}
          >
            Back
          </Button>
          <Button
            size="md"
            variant="link"
            _text={{
              fontStyle: "italic",
              color: "gray.500",
            }}
            onPress={() => {
              skip();
            }}
          >
            Bỏ qua
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default React.memo(Tutorial);
