const helpTodayDate = () => {
  const today = new Date();
  let year = today.getFullYear(),
    month = (today.getMonth() + 1),
    day = today.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}

export { helpTodayDate };
