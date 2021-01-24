export const monthDaysAmount = (month : number, year : number) : number => {
  let val = new Date(year,month,0).getDate();
  return val;
}