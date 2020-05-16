const getDonutPrice = numDonuts =>
  (Math.round(numDonuts * 1 * 100) / 100).toFixed(2);

export default getDonutPrice;
