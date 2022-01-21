export const positionDisplay = (digitCount) => {
  var centerDisplay = 0;

  if (digitCount === 1) {
    centerDisplay = -12.5;
  } else if (digitCount === 2) {
    centerDisplay = -7;
  } else {
    centerDisplay = -1;
  }
  return centerDisplay;
};
