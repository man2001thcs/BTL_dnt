import { Text } from "native-base";

import { memo } from "react";

function Context({ type }) {
  //console.log("type: " + type);
  if (type === 0) {
    return <Text>vừa tạo bài viết mới</Text>;
  } else if (type === 1) {
    return <Text>vừa bình luận vào bài viết của bạn</Text>;
  } else if (type === 3) {
    return <Text>vừa gửi lời mời kết bạn</Text>;
  } else if (type === 4) {
    return <Text> vừa được gửi lời mời kết bạn từ bạn</Text>;
  } else if (type === 5) {
    return <Text>vừa chấp nhận lời mời kết bạn</Text>;
  } else if (type === 6) {
    return <Text>vừa từ chối lời mời kết bạn</Text>;
  } else if (type === 11) {
    return (
      <Text>
        <Text color={"green.500"} bold>
          thích
        </Text>{" "}
        bài viết của bạn
      </Text>
    );
  } else if (type === 12) {
    return (
      <Text>
        <Text color={"yellow.500"} bold>
          không thích
        </Text>{" "}
        bài viết của bạn
      </Text>
    );
  } else if (type === 13) {
    return (
      <Text>
        {" "}
        <Text color={"red.500"} bold>
          yêu thích
        </Text>{" "}
        bài viết của bạn
      </Text>
    );
  } else if (type === 14) {
    return (
      <Text>
        {" "}
        <Text color={"violet.500"} bold>
          giận dữ
        </Text>{" "}
        trước bài viết của bạn
      </Text>
    );
  } else if (type === 21) {
    return (
      <Text>
        vừa{" "}
        <Text color={"green.500"} bold>
          thích
        </Text>{" "}
        bình luận của bạn
      </Text>
    );
  } else if (type === 22) {
    return (
      <Text>
        {" "}
        <Text color={"yellow.500"} bold>
          không thích
        </Text>{" "}
        bình luận của bạn
      </Text>
    );
  } else if (type === 23) {
    return (
      <Text>
        {" "}
        <Text color={"red.500"} bold>
          yêu thích
        </Text>{" "}
        bình luận của bạn
      </Text>
    );
  } else if (type === 24) {
    return (
      <Text>
        {" "}
        <Text color={"violet.500"} bold>
          giận dữ
        </Text>{" "}
        trước bình luận của bạn
      </Text>
    );
  }
}
export default memo(Context);
