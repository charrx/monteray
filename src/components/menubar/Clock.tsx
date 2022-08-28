import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";

const Clock = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const refreshTime = setInterval(() => {
      const newDate = formatDate(new Date());
      setDate(newDate);
    }, 1000);

    return () => {
      clearInterval(refreshTime);
    };
  }, [date]);

  return <>{date}</>;
};

export default Clock;
