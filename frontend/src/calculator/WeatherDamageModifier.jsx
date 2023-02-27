const WeatherDamageModifier = (moveType, weather) => {
  let damageMultiplierByWeather = 1;
  const move = moveType;

  if (move == "ほのお" && weather == "はれ") {
    damageMultiplierByWeather = damageMultiplierByWeather * 1.5;
  } else if (move == "みず" && weather == "はれ") {
    damageMultiplierByWeather = damageMultiplierByWeather * 0.5;
  } else if (move == "みず" && weather == "あめ") {
    damageMultiplierByWeather = damageMultiplierByWeather * 1.5;
  } else if (move == "ほのお" && weather == "あめ") {
    damageMultiplierByWeather = damageMultiplierByWeather * 0.5;
  }
  return damageMultiplierByWeather;
};

export default WeatherDamageModifier;
