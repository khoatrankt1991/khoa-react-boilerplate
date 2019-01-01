export const getName = (x) => {
  return x * 2.225;
}
export const getPi = (x) => {
  return x * 3.14;
}
export const getAsync = async () => {
  await 1;
  console.log('getAsync done');
}