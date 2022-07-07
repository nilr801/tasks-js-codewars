function digits(n) {
  let counter=0;
  while (n>=1)
    {
      n=n/10
      counter++;
    }
  return counter;
}
