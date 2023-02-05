import { Text } from "native-base";

import { memo } from "react";

function Time_show({ created }) {
  const date_created = new Date(created?.replace(/-/g, "/"));
  const month = date_created.getMonth();
  const day = date_created.getDate();
  const year = date_created.getFullYear();
  const hour = date_created.getHours();
  const minute = date_created.getMinutes();

  const this_time = new Date();
  const minute_show = (minute) => {
    if (parseInt(minute) === 0) {
      return " h";
    } else return ":" + minute;
  };

  if (this_time.getFullYear() === year) {
    return (
      <Text fontSize={12}>
        {day} tháng {month + 1} lúc {hour}
        {minute_show(minute)}
      </Text>
    );
  } else
    return (
      <Text fontSize={12}>
        {day} tháng {month} năm {year} lúc {hour}:{minute_show(minute)}
      </Text>
    );
}
export default memo(Time_show);
