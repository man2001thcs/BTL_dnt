import { Text, Box, HStack, Center } from "native-base";

import { memo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto, FontAwesome5 } from "@expo/vector-icons";

function Time_show({ time_distance_5, time_modified, publicity_state }) {
  var modified_text = "";
  //console.log(time_distance_5);

  const Icon_show = () => {
    if (publicity_state === 2) {
      return <MaterialIcons name="public" size={18} color="black" />;
    } else if (publicity_state === 0) {
      return <Fontisto name="user-secret" size={18} color="black" />;
    } else if (publicity_state === 1) {
      return <FontAwesome5 name="user-friends" size={18} color="black" />;
    }
  };
  var time_distance = Math.round(time_distance_5) * 5;
  if (time_modified > 0) {
    modified_text = " (Đã chỉnh sửa) ";
  }
  if (time_distance <= 1) {
    return (
      <HStack space={2} alignItems="center">
        <Text>{"1 phút" + modified_text}</Text>
        <Icon_show />
      </HStack>
    );
  } else if (1 < time_distance && time_distance < 60) {
    return (
      <HStack space={2} alignItems="center">
        <Text>{time_distance + "phút " + modified_text}</Text>
        <Icon_show />
      </HStack>
    );
  } else if (60 <= time_distance && time_distance < 1440) {
    return (
      <HStack space={2} alignItems="center">
        <Text>{Math.round(time_distance / 60) + " giờ " + modified_text}</Text>
        <Icon_show />
      </HStack>
    );
  } else if (1440 <= time_distance && time_distance < 43200) {
    return (
      <HStack space={2} alignItems="center">
        <Text>
          {Math.round(time_distance / 1440) + " ngày trước " + modified_text}
        </Text>
        <Icon_show />
      </HStack>
    );
  } else if (43200 <= time_distance && time_distance < 525600) {
    return (
      <HStack space={2} alignItems="center">
        <Text>
          {Math.round(time_distance / 43200) + " tháng " + modified_text}
        </Text>
        <Icon_show />
      </HStack>
    );
  } else if (525600 <= time_distance) {
    return (
      <HStack space={2} alignItems="center">
        <Text>
          {Math.round(time_distance / 525600) + " năm " + modified_text}
        </Text>
        <Icon_show />
      </HStack>
    );
  }
}
export default memo(Time_show);
