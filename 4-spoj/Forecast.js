// if it's raining today, take umbrella
// if it's snowing today, take umbrella
// if it's sunny today, take umbrella

let todayForecast = {
  raining: true,
  sunny: false,
};

if (todayForecast.raining && todayForecast.sunny) {
  console.log("Take Umbrella");
} else if (todayForecast.raining) {
} else if (todayForecast.sunny) {
} else {
}
