let d = new Date();
let time = d.toLocaleTimeString;
console.log(time);
setTimeout(() => {console.log(time);}, "1 second")