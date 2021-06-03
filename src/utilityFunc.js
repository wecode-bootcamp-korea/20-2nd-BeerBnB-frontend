export const currency = number => {
  new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(
    number
  );
};
export const calculateAvgRating = data => {
  //더 간단한 방법은?
  const ratingsArr = data.rating.map(rating => rating.category_rating);
  const numArr = ratingsArr.map(item => Number(item));
  const avg = numArr.reduce((acc, cur) => acc + cur, 0) / numArr.length;
  const res = avg.toFixed(2); //소수점 둘째자리!
  return res;
};
