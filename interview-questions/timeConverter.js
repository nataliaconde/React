// Problem Solving and Frontend Basics
// Convert 12 hours to 24 hours

const convert12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === "12") hours = "00";
    if (modifier === "PM") hours = parseInt(hours) + 12;

    return `${hours}:${minutes}`;
}
console.log("Converted from 12 hour to 24 hour format");
console.log("2:02 PM => " + convert12to24("02:02 PM"));
console.log("4:06 PM => " + convert12to24("04:06 PM"));
console.log("12:00 PM => " + convert12to24("12:00 PM"));
console.log("12:00 AM => " + convert12to24("12:00 AM"));
console.log("1:15 AM => " + convert12to24("1:15 AM"));