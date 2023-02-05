import React from "react";
import { Skeleton, VStack, HStack, Box } from "native-base";

const LoadingScreen = () => {
  return (
    <Box w="100%" alignContent={"center"} bgColor="gray.200">
      <Box
        py="4"
        px="3"
        borderWidth="1"
        mb="2"
        space={6}
        bgColor={"white"}
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <HStack mb="4">
          <VStack>
            <Skeleton
              borderWidth={1}
              borderColor="coolGray.200"
              endColor="warmGray.50"
              size="12"
              rounded="full"
            />
          </VStack>

          <VStack ml="2" mt="7">
            <Skeleton.Text lines={1} alignItems="center" w={12} />
          </VStack>
        </HStack>
        <HStack>
          <Skeleton.Text lines={3} alignItems="center" px="4" />
        </HStack>
        <HStack mt="6">
          <Skeleton h="40" />
        </HStack>
      </Box>
    </Box>
  );
};

export default React.memo(LoadingScreen);
