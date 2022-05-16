function weatherInfo(temp) {
    var celsius = (temp - 32) * (5 / 9);
    if (celsius <= 0) {
        return celsius + " is freezing temperature";
    } else {
        return celsius + " is above freezing temperature";
    }
}

console.log(weatherInfo(50)); // '10 is above freezing temperature'
console.log(weatherInfo(23)); // '-5 is freezing temperature'
