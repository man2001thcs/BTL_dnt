import React from "react";
import { Skeleton, VStack, HStack, Box } from "native-base";

const LoadingScreen = () => {
  return (
    <Box w="100%" alignContent={"center"} bgColor="white">
      <Box
        py="4"
        px="3"
        borderWidth="1"
        space={6}
        bgColor={'white'}
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        <HStack>
          <VStack>
            <Skeleton
              borderWidth={1}
              borderColor="coolGray.200"
              endColor="warmGray.50"
              size="12"
              rounded="full"
            />
          </VStack>

          <VStack ml="1" mt="1">
            <HStack mb="2">
              <Skeleton h="10" w={72} rounded={'xl'} />
            </HStack>
            <HStack space={3}>
                <Skeleton.Text lines={1} alignItems="center" w={8} />
                <Skeleton.Text lines={1} alignItems="center" w={8} />
                <Skeleton.Text lines={1} alignItems="center" w={8} />
            </HStack>
          </VStack>
        </HStack>
      </Box>
      
      
    </Box>
  );
};

export default React.memo(LoadingScreen);
