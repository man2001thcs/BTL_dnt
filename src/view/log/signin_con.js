import GenerateRandomCode from "react-random-code-generator";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Dimensions } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";

import React, { useState } from "react";
import link from "../../config/const";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Image } from "react-native";

import {
  Input,
  Icon,
  Pressable,
  FormControl,
  WarningOutlineIcon,
  Box,
  Button,
  Heading,
  HStack,
  useToast,
  Select,
  Checkbox,
  Text
} from "native-base";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import ToastAlert from "../main/page/component/alert";

import { MaterialIcons } from "@expo/vector-icons";
import { CheckIcon } from "native-base";

import { Formik } from "formik";
import * as Yup from "yup";

function Tutorial({ emailS, codeS, this_user_id, route_params, setLogin }) {
  const navigation = useNavigation();
  const [curPage, setCurPage] = React.useState(0);
  const dimensions = Dimensions.get("window");

  const toast = useToast();
  const [date, setDate] = useState(new Date(1598051730000));

  const [show, setShow] = React.useState(false);

  const [showTime, setShowTime] = useState(false);
  const [ok_2_submit, setOk_submit] = useState(false);
  const [gender, setGender] = React.useState(0);
  //console.log(curPage);

  const SignupSchema = Yup.object().shape({
    passwordS: Yup.string()
      .min(4, "Mật khẩu quá ngắn!")
      .max(10, "Mật khẩu quá dài!")
      .required("Vui lòng nhập mật khẩu!"),
    re_passwordS: Yup.string()
      .oneOf([Yup.ref("passwordS"), null], "Mật khẩu không khớp!")
      .min(4, "Mật khẩu quá ngắn!")
      .max(10, "Mật khẩu quá dài!")
      .required("Vui lòng nhập mật khẩu!"),
    fullname: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Cần điền tên!!"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("Cần điền địa chỉ!!"),
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowTime(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
      // for iOS, add a button that closes the picker
    }

    setShowTime(true);
  };

  const showDaypicker = () => {
    showMode("date");
  };

 // console.log(ok_2_submit);

  const button_color = () => {
    if (curPage < 3) {
      return "blue.600";
    } else {
      if (ok_2_submit[0] === 1) {
        return "green.600";
      } else {
        return "gray.400";
      }
    }
  };
  const next = () => {
    if (curPage < 3) {
      setCurPage(curPage + 1);
    } else if (curPage === 3) {
      //setLogin(true);
      //navigation.navigate("Main");
    }
  };
  const previous = () => {
    if (curPage >= 1) {
      setCurPage(curPage - 1);
    }
  };
  const skip = () => {
    setLogin(true);
    navigation.navigate("Main");
  };

  const Context = () => {
    if (curPage === 0) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading fontSize="20">Nhập vào họ tên</Heading>
          </HStack>
        </Box>
      );
    } else if (curPage === 1) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading fontSize="20">Nhập vào thông tin địa chỉ</Heading>
          </HStack>
        </Box>
      );
    } else if (curPage === 2) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading fontSize="20">Nhập vào ngày sinh</Heading>
          </HStack>
        </Box>
      );
    } else if (curPage === 3) {
      return (
        <Box>
          <HStack justifyContent={"center"}>
            <Heading>Thiết lập mật khẩu</Heading>
          </HStack>
        </Box>
      );
    }
  };

  const sign_up_function = async (values) => {
    const getSignUp_link =
      link.server_link +
      "controller/user/sign_in.php?timeStamp=" +
      GenerateRandomCode.TextCode(8);

    await fetch(getSignUp_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailS: route_params.emailS,
        phone_number: route_params.phone_number,
        passwordS: values.passwordS,
        re_passwordS: values.re_passwordS,
        fullname: values.fullname,
        address: values.address,
        birthday: date,
        gender: gender,
        codeS: GenerateRandomCode.TextCode(8),
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.code === "ACCOUNT_SIGN_IN_OK") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title="Đăng kí thành công"
                  variant="solid"
                  description="Bạn có thể tiến hành đăng nhập"
                  isClosable={true}
                />
              );
            },
          });
          setTimeout(() => {
            navigation.navigate("Login");
          }, 3000);
        }
        if (data?.code === "ACCOUNT_SIGN_IN_FAIL_EXIST") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title="Đăng kí thất bại"
                  variant="solid"
                  description="Tài khoản đã tồn tại"
                  isClosable={true}
                />
              );
            },
          });

          setTimeout(() => {
            navigation.navigate("Sign in");
          }, 3000);
        }
        if (data?.code === "ACCOUNT_SIGN_IN_FAIL") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title="Đăng kí thất bại"
                  variant="solid"
                  description="Kiểm tra lại thông tin"
                  isClosable={true}
                />
              );
            },
          });
        }
        //console.log("Success", data);
      })
      .catch((error) => {
        //console.error("Error:", error);
        toast.show({
          render: ({ id }) => {
            return (
              <ToastAlert
                id={id}
                title="Đăng kí thất bại"
                variant="solid"
                description="Vui lòng kiểm tra lại thông tin"
                isClosable={true}
              />
            );
          },
        });
      });
  };

  return (
    <Box flex="1" mt="0" bgColor={"white"} safeAreaTop>
      <Box alignSelf="center" mb="4" mt="-8">
        <Image
          source={require("../../img/log/background.jpg")}
          style={{
            width: dimensions.width,
            height: 230,
          }}
        />
      </Box>
      <Context></Context>
      <Formik
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          passwordS: "",
          re_passwordS: "",
          fullname: "",
          address: "",
        }}
        onSubmit={async (values, actions) => {
          //console.log(values);
          await sign_up_function(values);
          actions.setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          values,
          errors,
          isValid,
        }) => (
          <Box
            w="100%"
            alignItems="center"
            mt="4"
            bgColor="white"
            px="3"
            h={(dimensions.height * 10) / 20}
          >
            {curPage === 3 && (
              <Box
                space={4}
                w="100%"
                alignItems="center"
                bgColor="white"
                px="3"
              >
                <FormControl isInvalid={errors.passwordS} w="75%" maxW="300px">
                  <FormControl.Label>Mật khẩu</FormControl.Label>
                  <Input
                    name="passwordS"
                    placeholder="Enter password"
                    onChangeText={handleChange("passwordS")}
                    onBlur={handleBlur("passwordS")}
                    value={values.passwordS}
                    type={show ? "text" : "password"}
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="vpn-key" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={
                            <MaterialIcons
                              name={show ? "visibility" : "visibility-off"}
                            />
                          }
                          size={5}
                          mr="2"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                  />
                  {errors.passwordS && (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors.passwordS}
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={errors.re_passwordS}
                  w="75%"
                  maxW="300px"
                >
                  <FormControl.Label>Điền lại mật khẩu</FormControl.Label>
                  <Input
                    name="re_passwordS"
                    placeholder="Re-enter password"
                    onChangeText={handleChange("re_passwordS")}
                    onBlur={handleBlur("re_passwordS")}
                    value={values.re_passwordS}
                    type={"password"}
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="vpn-key" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                  />
                  {errors.re_passwordS && (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors.re_passwordS}
                    </FormControl.ErrorMessage>
                  )}
                  <Checkbox.Group
                    colorScheme="green"
                    defaultValue={ok_2_submit}
                    accessibilityLabel="pick an item"
                    onChange={(values) => {
                      setOk_submit(values);
                    }}
                  >
                    <Checkbox
                      mt="2"
                      shadow={2}
                      value={1}
                      accessibilityLabel="This is a dummy checkbox"
                      _text={{
                        fontSize: 13,
                      }}
                    >
                      Tôi chấp nhận điều khoản & điều kiện
                    </Checkbox>
                  </Checkbox.Group>
                  {errors && (
                    <FormControl.ErrorMessage
                      style={{ fontSize: 14 }}
                      leftIcon={<WarningOutlineIcon size="md" />}
                    >
                      <Text fontSize="16" bold>{"Kiểm tra lại thông tin"}</Text>
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>
              </Box>
            )}
            {curPage === 0 && (
              <FormControl isInvalid={errors.fullname} w="85%">
                <Input
                  name="fullname"
                  placeholder="Enter name"
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  value={values.fullname}
                  type={"text"}
                  size={5}
                />
                {errors.fullname && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.fullname}
                  </FormControl.ErrorMessage>
                )}

                <Select
                  selectedValue={gender}
                  minWidth="200"
                  placeholder="Chọn giới tính"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setGender(itemValue)}
                >
                  <Select.Item
                    label="--Vui lòng lựa chọn--"
                    value={0}
                    disabled
                  />
                  <Select.Item label="Nam" value={1} />
                  <Select.Item label="Nữ" value={2} />
                  <Select.Item label="Giới tính khác" value={3} />
                </Select>
              </FormControl>
            )}

            {curPage === 1 && (
              <FormControl isInvalid={errors.address} w="75%" maxW="300px">
                <Input
                  name="address"
                  placeholder="Enter address"
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                  type={"text"}
                />
                {errors.address && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors.address}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            )}

            {curPage === 2 && (
              <HStack>
                <Button
                  onPress={showDaypicker}
                  title="Show time picker!"
                  variant={"outline"}
                  mr="2"
                >
                  {date.toLocaleString()}
                </Button>
                <Button
                  onPress={showDaypicker}
                  title="Show time picker!"
                  bgColor={"green.700"}
                >
                  Thay đổi
                </Button>
              </HStack>
            )}

            <Box position="absolute" bottom={0} left={0} right={0}>
              <HStack justifyContent={"center"} mb="2">
                <PaginationDot
                  activeDotColor={"black"}
                  curPage={curPage}
                  maxPage={4}
                />
              </HStack>
              <HStack justifyContent={"center"}>
                <Button
                  disabled={ok_2_submit[0] !== 1 && curPage === 3}
                  size="md"
                  variant="solid"
                  rounded={"xl"}
                  bgColor={button_color()}
                  px="32"
                  _text={{
                    fontWeight: "bold",
                  }}
                  onPress={() => {
                    //console.log("stupid");
                    if (curPage < 3) {
                      next();
                    } else if (curPage === 3) {
                      handleSubmit();
                    }
                  }}
                  isLoading={isSubmitting}
                  isLoadingText="Đang kiểm tra"
                >
                  {curPage < 3 ? "Tiếp tục" : "Hoàn thành"}
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
              </HStack>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default React.memo(Tutorial);
