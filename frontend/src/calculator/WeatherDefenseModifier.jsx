const WeatherDefenseModifier = (
  defenseType1,
  defenseType2,
  teraType,
  weather
) => {
  let weatherDefenseModifier = 1;
  const type1 = defenseType1;
  const type2 = defenseType2;

  if (teraType) {
    if (teraType == "こおり" && weather == "ゆき") {
      weatherDefenseModifier = weatherDefenseModifier * 1.5;
    }
  } else if (weather == "ゆき" && (type1 == "こおり" || type2 == "こおり")) {
    weatherDefenseModifier = weatherDefenseModifier * 1.5;
  }
  return weatherDefenseModifier;
};

export default WeatherDefenseModifier;
