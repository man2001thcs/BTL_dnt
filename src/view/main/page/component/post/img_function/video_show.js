import React, { memo } from "react";
import { Box } from "native-base";
import { Dimensions, Pressable } from "react-native";

import link from "../../../../../../config/const";
import { Video, AVPlaybackStatus } from "expo-av";
import { useNavigation } from "@react-navigation/native";
//image show function in post
function Video_show(props) {
  const dimensions = Dimensions.get("window");
  const video_link = link.image_link + props.id + "/";
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  //console.log("created:" + props.img_num);
  return (
    <Box>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Box>
  );
}

export default memo(Video_show);
