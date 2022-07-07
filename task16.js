function solution(str, ending){
  let copyEnd=ending;
  let copyWord;
  let counter=0;
  for (let i=0; i<ending.length;i++)
    {
      if (ending[i]===str[str.length-ending.length+i])
        {
          counter++;
        }
    }
  if (counter===ending.length)
    return true;
  else
    return false;
}
