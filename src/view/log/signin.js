import React, { useState } from "react";
import link from "../../config/const";

import { Image } from "react-native";

import {
  Input,
  Icon,
  Stack,
  Pressable,
  NativeBaseProvider,
  FormControl,
  WarningOutlineIcon,
  Box,
  Button,
  Divider,
  Heading,
  Flex,
  Spacer,
  ScrollView,
  HStack,
  useToast,
  Select
} from "native-base";

import { Ionicons } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import GenerateRandomCode from "react-random-code-generator";
import { Dimensions } from "react-native";
import ToastAlert from "../main/page/component/alert";

export default function SignIn({ navigation }) {
  const toast = useToast();
  const dimensions = Dimensions.get("window");

  const SignupSchema = Yup.object().shape({
    emailS: Yup.string().email("Invalid email").required("Required email!"),
    phone_number: Yup.number("Invalid number!!").required("Required number!!"),
  });

  const sign_up_function = async (values) => {
    const getSignUp_link =
      link.server_link +
      "controller/user/check_exist.php?timeStamp=" +
      GenerateRandomCode.TextCode(8);

    await fetch(getSignUp_link, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        emailS: values.emailS,
        phone_number: values.phone_number,
      }),
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.code === "ACCOUNT_SIGN_IN_CONTINUE") {
          navigation.navigate("Sign in con", {
            emailS: values.emailS,
            phone_number: values.phone_number,
          });
        }
        if (data?.code === "ACCOUNT_SIGN_IN_FAIL_EXIST") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title="????ng k?? th???t b???i"
                  variant="solid"
                  description="T??i kho???n ???? t???n t???i"
                  isClosable={true}
                />
              );
            },
          });
        }
        if (data?.code === "ACCOUNT_SIGN_IN_FAIL") {
          toast.show({
            render: ({ id }) => {
              return (
                <ToastAlert
                  id={id}
                  title="????ng k?? th???t b???i"
                  variant="solid"
                  description="Ki???m tra l???i th??ng tin"
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
                title="????ng k?? th???t b???i"
                variant="solid"
                description="Vui l??ng ki???m tra l???i th??ng tin"
                isClosable={true}
              />
            );
          },
        });
      });
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box bgColor="white" safeAreaTop h={dimensions.height}>
          <Flex direction="row" space={8} mb="4">
            <Button
              variant="ghost"
              h="10"
              w="20"
              endIcon={
                <Icon
                  as={Ionicons}
                  name="arrow-back"
                  size="xl"
                  color="#137950"
                />
              }
              onPress={() => navigation.navigate("Login")}
            />
            <Heading size="md" mt="2">
              ????ng k??
            </Heading>

            <Spacer></Spacer>
          </Flex>

          <Box alignSelf="center" mb="4">
            <Image
              source={require("../../img/log/background.jpg")}
              style={{
                width: dimensions.width,
                height: 230,
              }}
            />
          </Box>
          <Formik
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              emailS: "dochu12@gmail.com",
              phone_number: "12312312",
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
              <Stack
                space={4}
                w="100%"
                alignItems="center"
                bgColor="white"
                px="3"
              >
                <FormControl isInvalid={errors.emailS} w="75%" maxW="300px">
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    name="emailS"
                    placeholder="Enter email"
                    onChangeText={handleChange("emailS")}
                    onBlur={handleBlur("emailS")}
                    value={values.emailS}
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                  />
                  {errors.emailS && (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors.emailS}
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={errors.phone_number}
                  w="75%"
                  maxW="300px"
                >
                  <FormControl.Label>S??? di???n tho???i</FormControl.Label>
                  <Input
                    name="phone_number"
                    placeholder="Enter phone number"
                    onChangeText={handleChange("phone_number")}
                    onBlur={handleBlur("phone_number")}
                    value={values.phone_number}
                    type={"text"}
                  />
                  {errors.phone_number && (
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      {errors.phone_number}
                    </FormControl.ErrorMessage>
                  )}
                </FormControl>

                <HStack px="4">
                  <Divider
                    my="2"
                    thickness="1"
                    _light={{
                      bg: "muted.400",
                    }}
                    _dark={{
                      bg: "muted.50",
                    }}
                  />
                </HStack>
                <HStack px="4" mb="12">
                  <Button
                    title="Login"
                    w="100%"
                    onPress={() => handleSubmit()}
                    bgColor="#137950"
                    isLoading={isSubmitting}
                    isLoadingText="??ang ki???m tra"
                  >
                    Ti???p t???c
                  </Button>
                </HStack>
              </Stack>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}
