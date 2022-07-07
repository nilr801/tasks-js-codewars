function rentalCarCost(d) {
  let cost;
  if (d>=7)
    {
      return ((d*40)-50);
    }
  if (d<3)
    {
      return d*40;
    }
  if (d>=3 && d<7)
    {
      return ((d*40)-20);
    }
}
