function CurrentYear() {
  const year = new Date().getFullYear();
  const currentYear = year + 543;
  return <div>{currentYear}</div>;
}
export default CurrentYear;
