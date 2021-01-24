export const firstDayReturner = (month: number, year: number) : number => {
  // console.log('firstDayReturner works with: ' + month + ' and: ' + year);
  let val: number = new Date(year,month-1,0).getDay()+1;
  return val;
}