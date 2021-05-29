export const currency = number => {
  new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(
    number
  );
};
