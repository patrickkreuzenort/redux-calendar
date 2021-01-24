export const monthUpdateInc = (month: number) : number => {
  
  // console.log('monthUpdateInc function works');
  if (month === 12) {
    return 1;
  }
  else {
    return ++month;
  }
}

export const monthUpdateDec = (month: number) : number => {
  
  // console.log('monthUpdateDec function works');
  if (month === 1) {
    return 12;
  }
  else {
    return --month;
  }
}