const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NZD",
  minimumFractionDigits: 0,
});

export default formatter;
