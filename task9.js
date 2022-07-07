function fakeBin(x){
  let copy="";
  for (let i=0; i<x.length; i++)
    {
      let num=parseInt(x[i], 10)
      if (num<5)
        {
          copy+=0;
        }
      else
        {
          copy+=1;
        }
    }
  return copy;
}
