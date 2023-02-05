import React from "react";
import link from "../../../../../../config/const";
import GenerateRandomCode from "react-random-code-generator";

import { Text } from "native-base";

function Mutual_number({
  emailS,
  user_account_2,
  codeS,
}) {
  const [mutual_emotion, setMutualEmotion] = React.useState(0);
  console.log(codeS);

  const fetchData = async () => {
    await fetch(
      link.server_link +
        "controller/friend/mutual_num.php?timeStamp=" +
        GenerateRandomCode.TextCode(8),
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          emailS1: emailS,
          emailS2: user_account_2,
          codeS: codeS,
        }),
        credentials: "same-origin",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("Success emo", data);
        if (parseInt(data?.id) === 1) {
          setMutualEmotion(parseInt(data?.number));
        } else setMutualEmotion(0);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //console.log("emo: " + emo_sum + like_click);

  React.useEffect(() => {
    fetchData();
  }, []);

  if (mutual_emotion > 0) {
    return (
      <Text>
        {mutual_emotion + " bạn chung"}
      </Text>
    );
  } else {
    return <Text>Không có bạn chung</Text>;
  }
}

export default React.memo(Mutual_number);
