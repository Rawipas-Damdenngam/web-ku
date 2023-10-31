function CurrentDay(props) {
  const className = props.className;
  const date = [
    "วันอาทิตย์",
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์",
  ];
  const month = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const day = new Date();
  const currentDay = day.getDay();
  const currentMonth = day.getMonth();
  const currentYear = day.getFullYear();

  const getDay = `${date[currentDay]}, ${day.getDate()} ${
    month[currentMonth]
  } ${currentYear + 543}`;

  return <div className={className}>{getDay}</div>;
}

export default CurrentDay;
