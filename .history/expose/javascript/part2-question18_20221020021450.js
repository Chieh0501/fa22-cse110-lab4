let d = new Date();
let time = d.toLocaleTimeString;
console.log(time);
setInterval(() => {
    console.log(time);}, 1000)