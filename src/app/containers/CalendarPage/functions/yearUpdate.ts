export const yearUpdateInc = (month: number, year: number) : number => {
  
  // console.log('yearUpdateInc function works');
  if (month === 12) {
    return ++year;
  }
  else {
    return year;
  }
}

export const yearUpdateDec = (month: number,year: number) : number => {
  // console.log('yearUpdateDec function works');
  if (month === 1) {
    return --year;
  }
  else {
    return year;
  }
}