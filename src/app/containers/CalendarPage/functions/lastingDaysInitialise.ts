export const lastingDaysInitialise = (month: number, year: number) : number => {
  console.log('lastingDaysInitialise works: month after click: ' + month + 'and year: ' + year);
  let amount: number = new Date(year,month-1,0).getDate();
  return amount;
}