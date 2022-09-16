const formatDate = (dateToFormat: Date): string => {
  const weekday = new Intl.DateTimeFormat("default", {
    weekday: "short",
  }).format(dateToFormat);

  const date = new Intl.DateTimeFormat("default", {
    month: "short",
    day: "numeric",
  }).format(dateToFormat);

  const time = new Intl.DateTimeFormat("default", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
    second: "numeric",
  }).format(dateToFormat);

  return `${weekday} ${date} ${time}`;
};

export default formatDate;
