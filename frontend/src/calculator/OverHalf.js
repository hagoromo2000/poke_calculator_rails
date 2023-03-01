function roundToHalf(num) {
  var numFloor = Math.floor(num); // 整数部分を取得
  var numDecimal = num - numFloor; // 小数部分を取得
  if (numDecimal <= 0.5) {
    return numFloor; // 小数部分が0.5以下の場合は切り捨て
  } else {
    return numFloor + 1; // 小数部分が0.5より大きい場合は切り上げ
  }
}

export default roundToHalf;
