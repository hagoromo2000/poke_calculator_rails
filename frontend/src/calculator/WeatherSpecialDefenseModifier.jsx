const WeatherSpecialDefenseModifier = (
  defenseType1,
  defenseType2,
  teraType,
  weather
) => {
  let weatherDefenseModifier = 1;
  const type1 = defenseType1;
  const type2 = defenseType2;

  if (teraType) {
    if (teraType == "いわ" && weather == "すなあらし") {
      weatherDefenseModifier = weatherDefenseModifier * 1.5;
    }
  } else if (weather == "すなあらし" && (type1 == "いわ" || type2 == "いわ")) {
    weatherDefenseModifier = weatherDefenseModifier * 1.5;
  }
  return weatherDefenseModifier;
};

export default WeatherSpecialDefenseModifier;
