const useFormatCount = number => {
    const numberFormat = new Intl.NumberFormat('en-US');
    return numberFormat.format(number);
};

export default useFormatCount;
  