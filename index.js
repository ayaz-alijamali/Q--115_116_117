// Question _____________ 115
function logDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Sunday';
            break;
        case 2:
            dayName = 'Monday';
            break;
        case 3:
            dayName = 'Tuesday';
            break;
        case 4:
            dayName = 'Wednesday';
            break;
        case 5:
            dayName = 'Thursday';
            break;
        case 6:
            dayName = 'Friday';
            break;
        case 7:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day number';
            break;
    }
    console.log(`Day ${dayNumber} is ${dayName}`);
}
logDayOfWeek(3); // Output: Day 3 is Tuesday
logDayOfWeek(8); // Output: Day 8 is Invalid day number
// Question _____________ 116
// Define a variable representing a season
let season = "summer";
// Switch statement to categorize seasons
switch (season) {
    case "spring":
    case "summer":
    case "fall":
        console.log("It's a temperate season.");
        break;
    case "winter":
        console.log("It's a cold season.");
        break;
    default:
        console.log("Invalid season.");
}
;
// Question ___________________ 117
// Define a variable representing a day of the week
let dayOfWeek = 5; // 1 for Sunday, 2 for Monday, ..., 7 for Saturday
// Switch statement to evaluate the day of the week
switch (dayOfWeek) {
    case 1:
        console.log("Today is Sunday.");
        break;
    case 2:
        console.log("Today is Monday.");
        break;
    case 3:
        console.log("Today is Tuesday.");
        break;
    case 4:
        console.log("Today is Wednesday.");
        break;
    case 5:
        console.log("Today is Thursday.");
        break;
    case 6:
        console.log("Today is Friday.");
        break;
    case 7:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Invalid day of the week.");
}
;
export {};
