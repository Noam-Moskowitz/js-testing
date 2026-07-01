export const getTrafficLightAction = (
  light: "red" | "yellow" | "green"
) => {
  switch (light) {
    case "green":
      return "go";
    case "yellow":
      return "slow";
    default:
      return "stop";
  }
};