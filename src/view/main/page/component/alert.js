import React from "react";
import {
  Button,
  useToast,
  VStack,
  HStack,
  Text,
  Center,
  IconButton,
  CloseIcon,
  Alert,
  NativeBaseProvider,
} from "native-base";

const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}) => {
  const descriptionContext = () => {
    if (description === "TypeError: Network request failed") {
      return "Lỗi mạng, vui lòng thử lại";
    } else return description;
  };
  const toast = useToast();
  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : "info"}
      variant={variant}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === "solid"
                  ? "lightText"
                  : variant !== "outline"
                  ? "darkText"
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text
          px="6"
          color={
            variant === "solid"
              ? "lightText"
              : variant !== "outline"
              ? "darkText"
              : null
          }
        >
          {descriptionContext()}
        </Text>
      </VStack>
    </Alert>
  );
};

export default React.memo(ToastAlert);
