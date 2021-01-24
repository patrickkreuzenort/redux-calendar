export const rowsAmountReturner = (month: number, year: number) : number => {
  // console.log('rowsAmountReturner works');
  return new Date(year,month,0).getDate()/7;
}