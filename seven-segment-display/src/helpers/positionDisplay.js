export const positionDisplay = (digitCount) => {
  var centerDisplay = 0;

  if (digitCount === 1) {
    centerDisplay = -10;
  } else if (digitCount === 2) {
    centerDisplay = -5;
  } else {
    centerDisplay = -1;
  }
  return centerDisplay;
};
