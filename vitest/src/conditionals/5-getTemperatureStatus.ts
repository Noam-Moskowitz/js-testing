export const getTemperatureStatus = (temp: number) => {
  if (temp <= 0) return "freezing";
  if (temp < 20) return "cold";
  if (temp < 30) return "warm";
  return "hot";
};