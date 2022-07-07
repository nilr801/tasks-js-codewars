function century(year) {
  let century;
  if (year%100===0)
    {
      century=Math.floor(year/100); 
    }  
   else
    {
       century=Math.floor((year/100)+1);
    }
  return century;
}
